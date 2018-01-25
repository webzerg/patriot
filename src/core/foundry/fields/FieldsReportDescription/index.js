/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { Box } from 'particles'

/* ------------------------- Internal Dependencies -------------------------- */
import ReduxField from 'organisms/ReduxField'
import FieldCollectionWrapper from 'containers/fields/FieldCollectionWrapper'


/* ---------------------------- Module Package ------------------------------ */
const FieldCollectionPersonBiography = props => (
  <FieldCollectionWrapper direction={['column']}  wrap='wrap' {...props} w={1} >
    <Box w={1} mt={[15]}>
      <Field
        name="reportDescription"
        label="Description"
        placeholder="A full description of who, what, when and where."
        component={ReduxField}
        type="textarea"
        mt={[10]}
        {...props.fields} />
    </Box>
    <Box w={1} mt={[15]}>
      <Field
        name="reportSummary"
        label="Summary"
        placeholder="A minimal description of who, what, when and where."
        component={ReduxField}
        type="textarea"
        mt={[10]}
        {...props.fields} />
    </Box>
  </FieldCollectionWrapper>
)

FieldCollectionPersonBiography.defaultProps = {
  fields: {}
}

export default FieldCollectionPersonBiography
