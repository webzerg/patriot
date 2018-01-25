/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Flex, Box } from 'particles'
/* ------------------------- Internal Dependencies -------------------------- */
import { Heading, Paragraph, Span } from 'atomic'

/* ------------------------------- Component -------------------------------- */
export default props =>
<Flex bg={['blueDark']} color={['white']} direction={['column', 'row']} align={"stretch"} justify="center" bs={[0]} z='15' pos='relative' display={['none', 'none', 'flex']}>
  <Flex align="center" w={[0.2]} pl={[15]} py={[7.5]}>
  <Link to="/why" color={['blueLight']}><Heading f={[1]} level={[5]} display='inline' px={10}>Why</Heading></Link>
    <Link to="/tools" color={['blueLight']}><Heading f={[1]} level={[5]} display='inline' px={10}>Tools</Heading></Link>
    <Link to="/community" color={['blueLight']}><Heading f={[1]} level={[5]} display='inline' px={10}>Community</Heading></Link>
    <Link to="/news" color={['blueLight']}><Heading f={[1]} level={[5]} display='inline' px={10}>News</Heading></Link>
  </Flex>
  
  <Flex align="center" w={[0.5]} justify="center" direction={['row']} >
    <Heading f={[1]} level={[5]} fontWeight="300" color="greenLight">Write News</Heading>
    <Heading f={[1]} level={[5]} fontWeight="300" ml={[5]} >| Join Team </Heading>
    <Heading f={[1]} level={[5]} fontWeight="300" color="yellow" ml={[5]} >| Attend Meetings </Heading>
  </Flex>
  <Flex align="center" justify={['flex-end']} pr={[15]} w={[1, 0.2, 0.15]} textAlign="right">

  </Flex>
  <Flex align="center" justify='flex-end' w={[1, 0.1, 0.15]} pr={[10]} >
    <Paragraph f={[1]} m={0} color="orange" >Immigration ALERTS</Paragraph>
  </Flex>
</Flex>