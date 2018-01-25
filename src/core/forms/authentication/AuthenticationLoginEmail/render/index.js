/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'

/* ------------------------- Internal Dependencies -------------------------- */
import Button from 'atoms/Button'
import Heading from 'atoms/Heading'
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
    {...StyleFormDefault}
  />
  <Field
    name="accountPassword" placeholder="Password" component={ReduxField} type="password"
    mt={20}
    {...StyleFormDefault}
  />
  {console.log(message)}
  {
    !message ? null : <Heading level={[3]} f={[2]} ta='center'>
      {message}
    </Heading>
  }
  <div>
    <Button type="submit" onClick={handleSubmit}
      w={1}
    >Login</Button>
  </div>
</FormBase>
)
