/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Switch } from 'react-router'
import styled from 'styled-components'
/* ------------------------- Internal Dependencies -------------------------- */
import { images } from 'assets'
import { Route } from 'atomic'
import Absolute from 'atoms/Absolute'
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
} from 'atomic'

import RegisterPerson from 'smithing/forms/register/RegisterPerson'
import AuthenticationLoginEmail from 'smithing/forms/register/AuthenticationLoginEmail'

// Styled Components
const FlexAbsolute = styled(Absolute)`
  display: flex;
  align-center: center;
  align-items: center;
  justify-content: center;
`
/* ---------------------------- Module Package ------------------------------ */
export default props =>
<div>
  <FlexAbsolute left right top bottom height={1}>
    <Switch>
      <Route
        component={RegisterPerson}
        path='/account/register'
      />
      <Route
        component={RegisterPerson}
        path='/account/reset'
      />
      <Route
        component={AuthenticationLoginEmail}
        path='/account/login'
      />
      
    </Switch>
  </FlexAbsolute>
  
</div>

