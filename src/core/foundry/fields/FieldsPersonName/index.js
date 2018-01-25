/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { Box, Flex } from 'particles'
/* ------------------------- Internal Dependencies -------------------------- */
import ReduxField from 'organisms/ReduxField'
/* ---------------------------- Module Package ------------------------------ */
export default props => (
<Flex direction='column' wrap='wrap' {...props.styledWrapper}>
  <Flex {...props.styledFieldOuter} >
    <Field 
      name="nameFirst"
      placeholder="First Name"
      component={ReduxField}
      type="text"
      color='blue'
      f={[4]}
      fw='700'
      mh={50}
      width={[1]}
      {...props}
    />
  </Flex>
  <Field
    name="nameLast"
    placeholder="Last Name"
    component={ReduxField}
    type="text"
    color='gray' 
    f={[1]}
    mh={50}
    width={[1]}
    {...props}
  />
</Flex>
)