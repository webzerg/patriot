/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import {
  Box
} from 'atomic'
import {
  FormReportAdd,
} from 'entity'

/* ------------------------------- Component -------------------------------- */
export default props => 
<Box p={[10]} w={[1,1, 350]}>
  <FormReportAdd 
    bg='white'
    p={[10]}
    styleWrapper={{
      bs:0,
      p:10
    }} 
    />
</Box>