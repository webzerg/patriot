/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
import Button from 'atoms/Button'
import ReduxField from 'organisms/ReduxField'
import StyleFormDefault from 'static/style/StyleFormDefault'
import { FormBase } from 'foundry'
import {
  FieldsAuthentication,
} from 'foundry'
export default ({
  handleSubmit, isSubmitting,
  ...props
}) => !props.createdBy ? null :
<FormBase {...props} >
  <FieldsAuthentication {...props} />
  <Button type="submit"  onClick={handleSubmit}>Sync Messages</Button>
</FormBase>

