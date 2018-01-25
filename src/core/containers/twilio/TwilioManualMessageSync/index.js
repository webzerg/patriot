/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react';
import {
  branch,
  compose,
  lifecycle,
} from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { history } from 'appStore/configuration';

/* ------------------------- Internal Dependencies -------------------------- */
import Component from './component'
import { createValidator, required } from 'logic/forms/validation'

/*--- Redux Store ---*/
import {  fromAuthentication } from 'store/departments/selectors'
import { databaseWriteRequest } from 'store/departments/actions'

/* --------------------------- Component Entry ------------------------------ */
/*-- Event Handlers ---*/
const onSubmit = (data, dispatch, props) => new Promise((resolve, reject) => {
  dispatch(databaseWriteRequest({
    payload: {
      data: {
        date: '2018-01-24T11:22:03-07:00',
      },
      metadata: {
        requestType: 'twilioSyncManualMessages',
        createdBy: props.createdBy
      }
    },
    metadata: {
      branch: ['request'],
      writeType: 'create'
    }
  }))
})

/*---*--- Lifecylce Methods ---*---*/
const QueryLifecycle = lifecycle({
  /*--- Component Mount ---*/
  componentDidMount()
  {

  },

  /*--- Component Update ---*/
  componentDidUpdate(prevProps)
  {
    if(this.props.submitting === true) {
      this.props.reset()
    }
  }
})


/* ----------------------------- Form Validation -------------------------------- */
const validate = createValidator({

})

const config = {
  form: 'Form',
  fields: [

  ],
  destroyOnUnmount: true,
  onSubmit,
  validate
}

/*-* Redux *-*/
const mapStateToProps = (state, props) => ({
  createdBy: fromAuthentication.getUserId(state)
})

const mapDispatchToProps = (dispatch, props) => ({
  
})

/* ----------------------------- Export -------------------------------- */
const FormConfiguration = reduxForm(config)
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  FormConfiguration,
  QueryLifecycle,
)(Component);
