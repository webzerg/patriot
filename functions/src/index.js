/* ------------------------ External Dependencies ------------------------ */
const _ = require('lodash')
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const shortid = require('shortid');
const twilio = require('twilio');
const accountsid = functions.config().twilio.accountsid
const authToken = functions.config().twilio.authtoken
// const twilioClient = {}
const VoiceResponse = require('twilio').twiml.VoiceResponse;
/* ------------------------- Internal Dependencies -------------------------- */
const db = require('./database');

/*--- Timewatch ---*/
import todayEpoch from './timewatch/todayEpoch'
import todayMatch from './timewatch/todayMatch'
/* ------------------------ Initialize Dependencies ------------------------- */
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ#$');
admin.initializeApp(functions.config().firebase);
const firestore = admin.firestore();

/* -------------------------------------------------------------------------- */

/* ------------------------ Internal Infrastructure ------------------------- */

/* -------------------------------------------------------------------------- */
/*---*---------------              ---------------*---* 

                      Authentication 

*---*---------------              ---------------*---*/
exports.authenticationComplete = functions.auth.user().onCreate(event => {

  const providerAccountType = {
    "google.com": 'google',
    "github.com": 'github',
    "twitter.com": 'twitter',
    "facebook.com": 'facebook',
  }[event.data.providerData.providerId]

  const person = {
    eid: event.data.uid,
    images: {
      imageProfile: event.data.photoURL
    },
    name: {
      nameDisplay: event.data.displayName,
      nameFirst: event.data.displayName,
    },
    contact: {
      contactEmail: event.data.email,
    },
    metadata: {
      metadataAccountType: providerAccountType || false
    },
    provider: event.data.providerData,
  }
  firestore.collection('people').add(person)
})

/*---*---------------              ---------------*---*
                        PubSub
*---*---------------              ---------------*---*/
exports.hourlyJobs= functions.pubsub.topic('hourly-tick').onPublish((event) => {
    console.log('new hourly pub/sub')
    twilioSyncCommunicationsDaily()
    const date = new Date()
    let currentHour = date.getHours()
    const nextHour = currentHour++

    functions.database.ref('/volunteer/hotline/immigration/today')
      .orderByChild("hourStart").startAt(currentHour).endAt(nextHour)
        .on('child_added', snapshot=> {
          const activeHotlineVolunteer = snapshot.val()
          db.databaseWrite({
            config: {writeType: 'push'},
            entity: 'volunteer',
            branches: ['hotline', 'immigration', 'active'],
            payload: {activeHotlineVolunteer},
          })
        })
  });

exports.dailyJobs=functions.pubsub.topic('daily-tick').onPublish((event) => {
    const epochToday = todayEpoch("America/Los_Angeles")
    functions.database.ref('/volunteer/hotline/immigration/storage') // TODO: The "immigration" part needs to be a variable
      .orderByChild("hourStart").startAt(epochToday.midnightEpoch).endAt(epochToday.dayendEpoch)
        .on('child_added', snapshot=> {
          const todayBatchHotlineVolunteer = snapshot.val()
          db.databaseWrite({
            config: {writeType: 'push'},
            entity: 'volunteer',
            branches: ['hotline', 'immigration', 'today'],
            payload: {todayBatchHotlineVolunteer},
          })
        })
  });

/*---*---------------              ---------------*---* 

                      Request Monitor 

/*---*---------------              ---------------*---*/

exports.requestMonitor = functions.database.ref('/request/{request}').onCreate(event => {
    const eventKey = event.data.key 
    const eventData = event.data.val()
    /*-------- Monitor Requests --------*/
    if(eventData.metadata.requestType) {
      switch(eventData.metadata.requestType) {
        case('twilioSyncManualCalls'): /* Call Sync : Twilio */
          console.log('syncing calls')
          if(!eventData.data.date) return false
          return twilioSyncManualCalls(eventData.data.date)
          break;
        case('twilioSyncManualMessages'): /* Messages Sync : Twilio */
          console.log('syncing messages')
          if(!eventData.data.date) return false
          return twilioSyncManualMessages(eventData.data.date)
          break;
      } // end switch
    }
  })

const twilioSyncManualCalls = date => new Promise((resolve, reject) => {
  const twilioClient = new twilio(accountsid, authToken);
  if(!date) return false
  const filterOpts = {
    startTimeAfter: '2018-01-1',
  };
  twilioClient.calls.each(filterOpts, (call) => {
    return new Promise((resolve, reject) => {
      firestore.collection('calls').doc(call.sid).set({
        accountSid: call.accountSid,
        annotation:call.annotation,
        answeredBy:call.answeredBy,
        apiVersion:call.apiVersion,
        callerName:call.callerName,
        dateCreated:call.dateCreated,
        dateUpdated:call.dateUpdated,
        direction:call.direction,
        duration:call.duration,
        endTime:call.endTime,
        forwardedFrom:call.forwardedFrom,
        from:call.from,
        fromFormatted:call.fromFormatted,
        groupSid:call.groupSid,
        parentCallSid:call.parentCallSid,
        phoneNumberSid:call.phoneNumberSid,
        price:call.price,
        priceUnit:call.priceUnit,
        sid:call.sid,
        startTime:call.startTime,
        status:call.status,
        subresourceUris:call.subresourceUris,
        to:call.to,
        toFormatted:call.toFormatted,
        uri:call.uri,
      }).then(result=>resolve(true))
    })
  })
})

const twilioSyncManualMessages = date => new Promise((resolve, reject) => {
  const twilioClient = new twilio(accountsid, authToken);
  if(!date) return false
  const filterOpts = {
    startTimeAfter: '2018-01-1',
  };
  twilioClient.messages.each(filterOpts, (message) => {
    firestore.collection('sms').doc(message.sid).set({
      accountSid: message.accountSid,
      apiVersion: message.apiVersion,
      body: message.body,
      dateCreated: message.dateCreated,
      dateUpdated: message.dateUpdated,
      dateSent: message.dateSent,
      direction: message.direction,
      errorCode: message.errorCode,
      errorMessage: message.errorMessage,
      from: message.from,
      messagingServiceSid: message.messagingServiceSid,
      numMedia: message.numMedia,
      numSegments: message.numSegments,
      price: message.price,
      priceUnit: message.priceUnit,
      sid: message.sid,
      status: message.status,
      subresourceUris: message.subresourceUris,
      to: message.to,
      uri: message.uri,
    }).then(result=>resolve(true))
  })
})


const twilioSyncCommunicationsDailyold = date => {
  const twilioClient = new twilio(accountsid, authToken);
  const filterOpts = {
    startTimeAfter: '2018-01-24T11:22:03-07:00',
  };
  twilioClient.calls.each(filterOpts, (call) => {
    firestore.collection('calls').doc(call.sid).set({
      accountSid: call.accountSid,
      annotation:call.annotation,
      answeredBy:call.answeredBy,
      apiVersion:call.apiVersion,
      callerName:call.callerName,
      dateCreated:call.dateCreated,
      dateUpdated:call.dateUpdated,
      direction:call.direction,
      duration:call.duration,
      endTime:call.endTime,
      forwardedFrom:call.forwardedFrom,
      from:call.from,
      fromFormatted:call.fromFormatted,
      groupSid:call.groupSid,
      parentCallSid:call.parentCallSid,
      phoneNumberSid:call.phoneNumberSid,
      price:call.price,
      priceUnit:call.priceUnit,
      sid:call.sid,
      startTime:call.startTime,
      status:call.status,
      subresourceUris:call.subresourceUris,
      to:call.to,
      toFormatted:call.toFormatted,
      uri:call.uri,
    })
    return true
  })
}

/* -------------------------------------------------------------------------- */

/* ------------------------- External API Services -------------------------- */

/* -------------------------------------------------------------------------- */

/*---*---               ---*---* 
            Twilio
            https://www.twilio.com/docs/api/twiml/client
*---*---               ---*---*/

exports.twilioVoice = functions.https.onRequest((request,response)=> {
  const voiceResponse = new VoiceResponse();
  const dial = voiceResponse.dial();
  const activeReferenceHotline = admin.database().ref('/volunteer/hotline/immigration/active')
  activeReferenceHotline.on('value').then(activeVolunteers => {
    _.forEach(activeVolunteers, volunteer=>{
      dial.number(volunteer.contact.contactPhone)
    })
  })
  response.send(voiceResponse.toString())
})

exports.twilioVoiceInformation = functions.https.onRequest((request,response)=> {
  console.log(request.ip)
  const voiceResponse = new VoiceResponse();
  const dial = voiceResponse.dial();
  dial.number('14155262486')
  dial.number('14153422598')
  dial.number('14156867259')
  response.send(voiceResponse.toString())
})

exports.twilioSyncMessages = functions.https.onRequest((request,response)=> {
  const twilioClient = new twilio(accountsid, authToken);
  const filterOpts = {
    startTimeAfter: '2018-01-24T11:22:03-07:00',
  };
  twilioClient.messages.each(filterOpts, (message) => {
    firestore.collection('sms').doc(message.sid).set({
      accountSid: message.accountSid,
      apiVersion: message.apiVersion,
      body: message.body,
      dateCreated: message.dateCreated,
      dateUpdated: message.dateUpdated,
      dateSent: message.dateSent,
      direction: message.direction,
      errorCode: message.errorCode,
      errorMessage: message.errorMessage,
      from: message.from,
      messagingServiceSid: message.messagingServiceSid,
      numMedia: message.numMedia,
      numSegments: message.numSegments,
      price: message.price,
      priceUnit: message.priceUnit,
      sid: message.sid,
      status: message.status,
      subresourceUris: message.subresourceUris,
      to: message.to,
      uri: message.uri,
    })
  })
})

exports.twilioSyncVoice = functions.https.onRequest((request,response)=> {
  const twilioClient = new twilio(accountsid, authToken);
  // Calls :: Twilio
  const filterOpts = {
    startTimeAfter: '2018-01-1T11:22:03-07:00',
  };
  twilioClient.calls.each(filterOpts, (call) => {
    firestore.collection('calls').doc(call.sid).set({
      accountSid: call.accountSid,
      annotation:call.annotation,
      answeredBy:call.answeredBy,
      apiVersion:call.apiVersion,
      callerName:call.callerName,
      dateCreated:call.dateCreated,
      dateUpdated:call.dateUpdated,
      direction:call.direction,
      duration:call.duration,
      endTime:call.endTime,
      forwardedFrom:call.forwardedFrom,
      from:call.from,
      fromFormatted:call.fromFormatted,
      groupSid:call.groupSid,
      parentCallSid:call.parentCallSid,
      phoneNumberSid:call.phoneNumberSid,
      price:call.price,
      priceUnit:call.priceUnit,
      sid:call.sid,
      startTime:call.startTime,
      status:call.status,
      subresourceUris:call.subresourceUris,
      to:call.to,
      toFormatted:call.toFormatted,
      uri:call.uri,
    }).then(result=>response.send(true))
  })
})