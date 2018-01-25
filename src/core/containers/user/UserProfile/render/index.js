/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
/* ------------------------- Internal Dependencies -------------------------- */
import { Flex, Box, Image, Button, Link, SVG, Span } from 'atomic'
/* --------------------------- Styled Components ---------------------------- */
import AuthorizationLogin from 'containers/authentication/AuthorizationLogin'
/* ------------------------------- Component -------------------------------- */
const UserProfile = props => !props.user 
?
<Flex 
  align="center"
  justify={[ 'center', 'center', 'flex-end']}
  color='white'
  pr={[null, null, 15]}
  py={[5, 5, 'inherit']}
  w={[1]}>
  <Box px={10}>
    <AuthorizationLogin gradient='cherry' children='Login/Register' providerSelection='google' />
  </Box>
</Flex>
:
<Flex align='center' direction={['row']} justify='flex-end' w={[1]} {...props} >
    <Span f={1} >{ props.user.displayName}</Span>
    <Image src={props.user.photoURL} height={[37.5]} w={[37.5]} borderRadius={0.5} bs={[2]} b={['2px solid transparent']} bc={['white']} />
    { props.logoutButton ? <Button onClick={props.logout} f={[0]} small >Logout</Button> : null }
</Flex>
  

/* ---------------------------- Export Package ------------------------------ */
export default UserProfile