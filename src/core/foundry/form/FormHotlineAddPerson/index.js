/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react';
import { recompose } from 'recompose'
import { connect } from 'react-redux'
import {
  branch,
  compose,
  lifecycle,
  withProps,
  withState,
  renderComponent
} from 'recompose'
import { 
  reduxForm,
  reset
} from 'redux-form'

/* ------------------------- Internal Dependencies -------------------------- */
import { SpinnerSquares } from 'atomic'
/*--- Form Validation ---*/
import { createValidator, required } from 'logic/forms/validation'

/*--- Redux Store ---*/
import {
  entityAddRequest,
  firestoreDocumentAddRequest,
  databaseWriteRequest,
  firestoreDocumentFilterGetRequest,
 } from 'store/departments/actions'
import {  fromAuthentication, fromFirestore } from 'store/departments/selectors'

/* ------------------------ Initialize Dependencies ------------------------- */
import FormRender from './render'

/* --------------------------- Recompose ------------------------------ */
/*---*--- Lifecylce Methods ---*---*/
const queryLifecycle = lifecycle({
  /*--- Component Mount ---*/
  componentDidMount() {
    this.props.firestoreDocumentFilterGetRequest({
      payload: {},
      metadata:{
        branch: [
          'people'
        ],
        delta: 'ContributorsHotlineActive'
      }
    })
  },

  /*--- Component Update ---*/
  componentDidUpdate(prevProps) {
    if(this.props.submitting === true) {
      this.props.reset()
    }
  }
})


/* ----------------------------- Form Validation -------------------------------- */
const validate = createValidator({

})

/* ---------------------------- Form Handlers ------------------------------- */
/*-- Event Handlers ---*/
const onSubmit = (data, dispatch, state) => new Promise((resolve, reject) => {
  const { timeStart, timeEnd, dateStart, dateEnd } = data

  const submission = {}
  submission.permissions = _.pickBy(data, (value, key)=> key.startsWith("created"));
  submission.date =  _.pickBy(data, (value, key)=> key.startsWith("date"));
  submission.hotline =  _.pickBy(data, (value, key)=> key.startsWith("hotlineSelection"));
  /*---*--- Hotline Data Format | documentation/volunteer/hotline --*---*/

  submission.time = {}
  submission.time.days = _.pickBy(data, (value, key)=> key.startsWith("day"));
  submission.time.hourStart = !timeStart ? null : timeStart.getHours()
  submission.time.hourEnd = !timeEnd ? null : timeEnd.getHours()
  submission.time.minuteStart = !timeStart ? null : timeStart.getMinutes()
  submission.time.minuteEnd = !timeEnd ? null : timeEnd.getMinutes()

  submission.time.epochStart = !dateStart ? null : dateStart.getTime() / 1000
  submission.time.epochEnd = !dateEnd ? null : dateEnd.getTime() / 1000

  data.contributorPeople

  data.contributorPeople.map((v, i)=> {
    submission.relationships = [data.contributorPeople[i]]
    submission.name = {nameDisplay: data.contributorPeople[i].nameDisplay}
    dispatch(firestoreDocumentAddRequest({
      payload: submission, 
      metadata: {
      branch: [
        'hotline'
      ],
      delta: 'HotlineAdd',
      trigger: 'HotlineCalendar',
      }
    }))
  })


})

const mapStateToProps = (state, props) => { 
  return {
    contributors: fromFirestore.getQueryData(state, 'ContributorsHotlineActive'),
    initialValues: {
      createdBy: fromAuthentication.getUserId(state)
    }
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  firestoreDocumentFilterGetRequest: (settings)=>dispatch(firestoreDocumentFilterGetRequest(settings)),
})

/* -------------------------- Form Configuration ---------------------------- */
const config = {
  form: 'FormHotlineAddPerson',
  fields: [
    'timeStart',
    'timeEnd',
    'dateStart',
    'dateEnd',
    'dayMonday',
    'dayTuesday',
    'dayWednesday',
    'dayThursday',
    'dayFriday',
    'daySaturday',
    'daySunday',
    'userRequesting',
  ],
  destroyOnUnmount: true,
  onSubmit,
  validate
}

const spinnerWhileLoading = (test) => branch(test,renderComponent(()=><SpinnerSquares gradient='cherry' />))
/*-- Export Form ---*/
const Render = props => <FormRender { ...props} />
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  spinnerWhileLoading(
    (props) => !props.initialValues.createdBy ? true : false
  ),
  reduxForm(config),
  queryLifecycle,
)(Render);

