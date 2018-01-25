/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'

/* ------------------------- Internal Dependencies -------------------------- */
import Button from 'atoms/Button'
import ReduxField from 'organisms/ReduxField'
import StyleFormDefault from 'static/style/StyleFormDefault'
import UserLoginStatus from 'containers/user/UserLoginStatus'

import {
  FieldsPersonName,
} from 'foundry'
import { FormBase } from 'foundry'

const FormWrapper = styled.form`
  display: block;
  padding: 20px;
`
export default ({
  handleSubmit, isSubmitting,
  message, styled,
  ...props
}) => (
<FormBase>
  <Field
    name="accountEmail" placeholder="Email" component={ReduxField} type="email"  
  />
  <Field
    name="accountPassword" placeholder="Password" component={ReduxField} type="password"
    mt={20}
  />
  <FieldsPersonName mt={1} w={1} {...StyleFormDefault}/>
  <Field
    name="accountRole" placeholder="Industry Role" component={ReduxField} type="textfield" 
     {...StyleFormDefault}
  />
  <div>
    <Button type="submit"  onClick={handleSubmit}>Register</Button>
  </div>
</FormBase>
)
