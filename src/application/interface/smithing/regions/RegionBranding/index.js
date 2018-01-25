/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { logo } from 'assets/graphics'
import {
  Flex, Box, 
  Heading, Image, Paragraph, Link, Span, 
  BackgroundImage, BackgroundGradient
} from 'atomic'
import UserProfile from 'containers/user/UserProfile'
import DrawerOpen from 'containers/drawer/DrawerOpen'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Flex
  direction={['column', 'row']} align={"stretch"} justify="center"
  gradientDir='45deg' 
  bs={[3]} 
  color={['blueLight']}
  pos='relative'
  z={100}
>
  <Flex align="center" justify="left" w={[1, 1, 0.35]} pl={[15]} direction={['row']} >
    <Link to="/">
      <Image src={logo} w={[35, 45]} mr={[10]} />
    </Link>
  </Flex>
  
  <Flex align="center" w={[1, 1, 0.25]} justify="flex-start" display={['none', 'none', 'Flex']} py={[15]} >
    <Link to="/rapid-response"><Heading color={'white'} level={4} margin={'0'} fontSize={[3]} fontWeight={'100'}>
      Rapid Response
    </Heading></Link>
  </Flex>

  <Flex align="center"  pr={[null, null, 15]} py={[5, 5, 'inherit']} w={[1, 1, 0.25]}>
    <Link to="/canary"><Heading color={'white'} level={4} margin={'0'} fontSize={[3]} fontWeight={'100'}>
      Canary
    </Heading></Link>
  </Flex>
  <Flex align="center" justify='center' gradient={['blue']} py={[10]} color='white' w={[1, 1, 0.25]} textAlign="center">
    <UserProfile logoutButton/>
  </Flex>
  <Flex align="center" justify='center' gradient={['blue']} py={[10]} color='white' w={[1, 1, 0.07]} textAlign="center">
    <DrawerOpen><Heading f={[2]} level={[4]}><a>Menu</a></Heading></DrawerOpen>
  </Flex>
  
</Flex>
