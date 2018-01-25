# Patriot
## Technology For Protecting<br/>What Makes America Great

The Patriot project is a humble attempt to lay the groundwork for a Centralized/Decentralized application combo, built to help protect at-risk people, families and communities. The centralized **Rapid Response Platform** is built via Firebase and Twilio. The decentralized **Heartbeat System** will be built using the Ethereum Blockchain.

**Rapid Response:** Easy to deploy, rapid response network for local communities and neighborhoods to stay vigilant.

**Heartbeat:** An automated "canary" notifcation system that alerts families, friends and trusted organizations when an at-risk person has been forcebly disconnected from technology.

Each tool attempts to provide different safeguards against unconstitutional encroachments on sovereign people's pursuit to Life, Liberty and Happiness.

The **Rapid Response** Application can help track and monitor unwanted intrusions into our communities, homes and personhood.

The **Heartbeat System** can help identify when a sovereign person is being illegitimately being restricted of her/his God given and inalienable rights.

The tools, while not prevenative, can help mitigate the damage and aftermath of thoughtless, destructive forces who are confused about the lasting damage imparted on the Great United States of America - an attack on families, is an attack on the fabric of America.

#### Development Requirements
- Node.js
- Firebase Account (http://firebase.com/)
  - ```firebase-cli``` (https://github.com/firebase/firebase-tools)
- Twilio (https://www.twilio.com/)
  - AccountSID
  - AuthToken

## Getting Started
The Patriot Project includes multiple technologies and platforms for both development and production. With just a little Node.js experience and terminal (command prompt) experience, you should be able to setup and launch the application in roughly 40-80 minutes.

##### The Basics
The code repository is built using an ejected ```create-react-app```.

**Frontend Technologies**
- React
- Redux
- Sagas

**Backend Technologies**
- Firebase
- Twilio
- Ethereum

**Developer Tools**
- Node.js
- Truffle

```
git clone git@github.com:KamesCG/patriot.git ; cd patriot

npm install || yarn <---- Install Dependencies

npm run start || yarn start <---- Development
npm run build || yarn build <---- Production

```

##### Replacing Project Settings
Once you have created a new Firebase Project (https://console.firebase.google.com/u/0/) it will be time to change the application settings ```(src/application/settings/Firebase/index.js)```

Copy/paste the new project settings - replacing the default application settings - and the Rapid Response System will now be diretly connected to the newly created application.

*Replace the following settings.*
```
module.exports = {
    FIREBASE_CONFIG: {
        apiKey: "AIzaSyCK3fEw-BOgupDiY2hNErUqO8J20Jwd_wo",
        authDomain: "patriot-project.firebaseapp.com",
        databaseURL: "https://patriot-project.firebaseio.com",
        projectId: "patriot-project",
        storageBucket: "",
        messagingSenderId: "945351061018"
    },
};
```

#### Development
The ```start``` command will initialize a development environment: *webpack-dev-server and hot-reloading.*

As files are added and changed, the webpack-dev-server and hot-reloading systems, will manage automatic compiling, for a live preview of the application state in the browser.

When the ``` npm run start || yarn start ``` command is issued a new Browser window/tab will open with the URL ```localhost:3000``` displaying the latest compiled version of the code.  


##### Configuration
The development configuration settings can be found within ```configurations/webpack.config.dev.js```

#### Build
The ```build``` command will generate a production ready application, created within the ```build/application``` folder.

##### Configuration
The production configuration settings can be found within ```configurations/webpack.config.prod.js```

```
npm run build || yarn build
firebase deploy --only hosting
```





### Twilio
The Rapid Response system uses Twilio (sms/voice) for affordable call-center infrastructure.



Setup the Firebase Functions with the Twilio ```accountsid``` and ```authtoken``` settings use the ```firebase-cli``` (https://github.com/firebase/firebase-tools)
```
firebase functions:config:set twilio.accountsid="INSERT_TWILIO_SID"
firebase functions:config:set twilio.authtoken="INSERT_TWILIO_AUTH"
```


The Firebase Functions will use the parameters when initializing the Twilio services

src:functions/twilio/index.js  
```
const accountSid = functions.config().twilio.accountsid
const authToken = functions.config().twilio.authtoken
```