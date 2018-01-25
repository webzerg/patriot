/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'

/* ------------------------- Internal Dependencies -------------------------- */
import Button from 'atoms/Button'
import ReduxField from 'organisms/ReduxField'
import StyleFormDefault from 'static/style/StyleFormDefault'
import { FormBase } from 'foundry'
export default ({
  handleSubmit, isSubmitting,
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
  <div>
    <Button
      onClick={handleSubmit}
      mt={10}
      w={1}
    >
      Register
    </Button>
  </div>
</FormBase>
)
