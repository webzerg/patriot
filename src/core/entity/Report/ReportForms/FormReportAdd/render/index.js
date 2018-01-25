/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
import FormBase from 'workshop/form/FormBase'
import { Flex, Box, Button, InputWrapper, Heading, ReduxField,  } from 'atomic'

import {
  FieldsAuthentication,
  FieldsAddressAutoComplete,
  FieldsDate,
  FieldsTime,
  FieldsReportName,
  FieldsReportDescription,
} from 'foundry'

import StyleFormDefault from 'static/style/StyleFormDefault'
/* --------------------------- Styled Components ---------------------------- */
export default ({handleSubmit, isSubmitting, match, ...props}) => {
if(!props.initialValues.createdBy) return null
return <FormBase {...props}
  bg='white'
  color='charcoal'
  p={10} >
  <FieldsAuthentication/>
  <FieldsReportName {...StyleFormDefault}/>
  <InputWrapper>
    <FieldsAddressAutoComplete {...StyleFormDefault} address={props.address} setAddress={props.setAddress} />
  </InputWrapper>
  <Heading level={[3]} f={[3]} mt={[10]}>
    Incident Time
  </Heading>
  <FieldsTime {...StyleFormDefault}/>
  <Heading level={[3]} f={[3]} mt={[10]}>
    Incident Date
  </Heading>
  <FieldsDate {...StyleFormDefault}/>
  <FieldsReportDescription {...StyleFormDefault}/>
  <Button onClick={handleSubmit} gradient='cherry' mt={[10,15]} w={1} >Create Report</Button>
</FormBase>
}