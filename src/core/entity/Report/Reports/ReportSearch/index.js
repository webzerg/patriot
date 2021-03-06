/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import {
  Box, Flex, Heading, HorizontalRule
} from 'atomic'
import {
  FormReportSearch
} from 'entity'
/* ------------------------------- Component -------------------------------- */
export default props => 
<Box p={[10]} >
  <Heading level={[3]} f={[3]}>Report Search</Heading>
  <HorizontalRule bi='colorWheel' bs={1} w={[1]} />
  <FormReportSearch
    collection={props.collection}
    entity={props.entity}
  />
</Box>