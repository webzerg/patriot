/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import MediaQuery from 'react-responsive'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Absolute, Fixed } from 'particles'
import { 
  Flex, Box,
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
} from 'atomic'

import UPortCredentialsRequest from 'assimilation/fetching/uport/UPortCredentialsRequest'
import UportTestSuite from 'assimilation/fetching/uport/UportTestSuite'
import HeartbeatContractInitialize from 'assimilation/fetching/heartbeat/HeartbeatContractInitialize'
import { AuthenticationLoginEmail } from 'forms'
import Login from 'workshop/forms/authentication/AuthorizationLogin'
import { FirestoreList, PopoverPure } from 'containers'
import DialogOpen from 'containers/dialog/DialogOpen'
import PopoverClose from 'containers/popover/PopoverClose'
const Body = props => <Box w={[1,1,675]} bs={4} br={10} >
  <Flex direction={['column', 'row']} >
    <Box w={[1,1,0.45]} bg='sand' p={[10,15]} bs={1} >
      <Heading level={[3]} f={[3,4]}color='blue'>Organizations</Heading>
      <Paragraph f={[1]}>
        Easily find Organizations in the Marin County Community. Search by type, services, availability, etc...
      </Paragraph>
        </Box>
      </Flex>
</Box>



/* ------------------------------- Component -------------------------------- */
const Front = ({ ...props }) => {
  return (
    <Section {...props} px={[20,40]}  color='white' textAlign='center' pos='relative' >

      <BackgroundGradient gradient='purpleBlue' o={0.85} gradientDir={'0deg'} />
      <BackgroundImage image={assets.images.boyAmerica} o={[0.235]} />


      <Flex direction={['column']}  mh={['50vh', '50vh', '100vh']} justify={['center']}>
      <Heading fontSize={[4,5]} level={3} fontWeight={[300]} mb={10} ts={['darkPurple']}>
        <Span fw={[700]} >PROTECT 🇺🇸 WHAT</Span> <br/>
        MAKES AMERICA GREAT
      </Heading>
      <br/>
      <Heading fontSize={[3,4]} fontWeight={[100]} mb={[10]} ts={['darkPurple']}>
        <strong>Rapid Response <Span fw={[300]}>(communications)</Span> &amp; Heartbeat <Span fw={[300]}>(status)</Span> </strong><br/>systems for empowering at-risk people, families, and communities.
      </Heading>
      <Container
        mt={40}
        w={[920]}>
        <Flex direction={['column', 'row']} justify={['space-evenly']}>

          <Box w={0.40} color="white">
            <Heading level={[3]} f={[2]}>
              Centralized
            </Heading>
            <Heading fontSize={[3,4]} level={3} fontWeight={[300]} mb={10} ts={['darkPurple']}>
              <Span fw={[700]}>Rapid Response</Span>
            </Heading>
            <AuthenticationLoginEmail/>
            <Box mt={10} >
              <Link to='/account/register'>Register Account</Link> | <Link to='/account/reset'>Reset Password</Link>
            </Box>
          </Box> 

          <Box w={0.40}>
            <Heading level={[3]} f={[2]}>
              Decentralized
            </Heading>
            <Heading fontSize={[3,4]} level={3} fontWeight={[300]} mb={10} ts={['darkPurple']}>
              <Span fw={[700]}>Heartbeat</Span>
            </Heading>
            <UPortCredentialsRequest/>
          </Box>
        </Flex>
        
      </Container>
      </Flex>

    </Section>
  )
}

/* ---------------------------- Export Package ------------------------------ */
export default Front