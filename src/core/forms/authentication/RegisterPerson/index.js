/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { history } from 'appStore/configuration';
/* ------------------------- Internal Dependencies -------------------------- */
import { createValidator, required } from 'logic/forms/validation'

/*--- Redux Store ---*/
import { authRegisterWithEmailPassword } from 'store/departments/actions'

/* ------------------------ Initialize Dependencies ------------------------- */
import FormRender from './render'

/* --------------------------- Component Entry ------------------------------ */
const FormRedux = props => <FormRender { ...props} />

/*-- Event Handlers ---*/
const onSubmit = (data, dispatch, props) => new Promise((resolve, reject) => {
  dispatch(authRegisterWithEmailPassword({
    payload: data,
    metadata: {history}
  }))

})

/* ----------------------------- Form Validation -------------------------------- */
const validate = createValidator({
  email: [required],
  password: [required],
})

/* ----------------------------- React Redux -------------------------------- */
const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => ({

})

export const config = {
  form: 'Login',
  fields: [
    'email',
    'password',
  ],
  destroyOnUnmount: true,
  onSubmit,
  validate
}


export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config)(FormRedux))
