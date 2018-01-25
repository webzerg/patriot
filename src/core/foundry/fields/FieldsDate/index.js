/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
import { Flex, Box } from 'atomic'
import {
  DatePicker,
  TimePicker
} from 'redux-form-material-ui'
/* ---------------------------- Module Package ------------------------------ */
export default props => (
  <Flex direction={['column', 'row']} wrap='wrap' {...props.styledWrapper} >
    <Box  w={[1]} >
      <Field name="datePoint" component={DatePicker} format={null} hintText="Date Start" fillWidth />
    </Box>
  </Flex>
)

