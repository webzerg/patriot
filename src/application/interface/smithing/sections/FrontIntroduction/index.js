/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Flex, Box } from 'particles'
import { BackgroundImage, Container, Heading, Image, Paragraph, Section, Span} from 'atomic'
/* ------------------------------- Component -------------------------------- */
export default props => (
<Section {...props} bg="white" color={['charcoal']} pos="relative" pb={[20, 40, 80]} pt={[70, 100,140]} px={[20]} bs={['insetBottom']} z={[15]} pos='relative' >
  <Container textAlign='center' w={[720]} >
    <Heading f={[5,6,7]} level={[2]} color={'blue'} mt={[10, 20]} >Rapid Response</Heading>
    <Paragraph f={[2]} color={['charcoal']}>Organize, inform and stay vigilant with a rapid response system. With the potential of continued unconsitutional actions threatening American's communities, we must stand together for Life, Liberty and The Pursuit of Happiness </Paragraph>
  </Container>
  <Container>
    <Flex my={[20, 40]} align={['center']} wrap={['wrap']} >
      <Box flex={['1 1 100%', '1 1 100%', '1 1 50%']} order={[2,2, 1]} px={[10, 20, 40]} >
        <Heading f={[4,5]} level={[2]} color={'red'} mt={[0]}>Scheduling</Heading>
        <Paragraph color='blue'>Easily schedule rapid response hotline volunteers using a visual calendar system. Volunteers can be scheduled for multiple time slots and also on a recurring basis.</Paragraph>
      </Box>
      <Box flex={['1 1 100%', '1 1 100%', '1 1 50%']} order={[1,1, 2]} >
        <img src={assets.screenshots.dashboardScheduling}/>
      </Box>
    </Flex>
    <Flex my={[20, 40]} align={['center']} wrap={['wrap']} >
      <Box flex={['1 1 100%', '1 1 100%', '1 1 50%']} order={[2]} px={[10, 20, 40]} >
        <Heading f={[4,5]} level={[2]} color={'red'} mt={[0]}>Reports</Heading>
        <Paragraph color='blue'>Add and edit reports, either from annoymous tips or from verified sources. Report information can be kept hidden until permissioned staff have verified information legitimacy. </Paragraph>
      </Box>
      <Box flex={['1 1 100%', '1 1 100%', '1 1 50%']} order={[1]} >
        <img src={assets.screenshots.dashboardReports}/>
      </Box>
    </Flex>
    <Flex my={[20, 40]} align={['center']} wrap={['wrap']} >
      <Box flex={['1 1 100%', '1 1 100%', '1 1 50%']} order={[2,2, 1]} px={[10, 20, 40]} >
        <Heading f={[4,5]} level={[2]} color={'red'} mt={[0]}>Call List</Heading>
        <Paragraph color='blue'>Easily track incoming/outgoing calls to see the who, what, when and how at just a glimpse.</Paragraph>
      </Box>
      <Box flex={['1 1 100%', '1 1 100%', '1 1 50%']} order={[1,1, 2]} >
        <img src={assets.screenshots.dashboardCalls}/>
      </Box>
    </Flex>
  </Container>
  <Container textAlign='center' w={[720]} >
    <Heading f={[5,6,7]} level={[2]} color={'blue'} mt={[10, 20]}>Heartbeat</Heading>
    <Paragraph f={[2]} color={['charcoal']}>Retroactively alert friends, families and others, during an emergency.<br/>Even if you don't have access to a smartphone.</Paragraph>
  </Container>
  <Container>
    <Flex my={[20, 40]} align={['center']} wrap={['wrap']} >
      <Box flex={['1 1 100%', '1 1 100%', '1 1 50%']} order={[1,1, 2]} >
        <img src={assets.screenshots.dashboardHeartbeat}/>
      </Box>
      <Box flex={['1 1 100%', '1 1 100%', '1 1 50%']} order={[2,2, 1]} px={[10, 20, 40]} >
        <Heading f={[4,5]} level={[2]} color={'red'} mt={[0]}>Decentralized Infrastructure</Heading>
        <Paragraph color='blue'><strong>Heartbeat is an automated notifcation alert system.</strong></Paragraph>
        <Paragraph color='blue'>Heartbeat is an automated notifcation alert system. Using Ethereum as the global, tamper resistant computer, alerts and notifications can be sent to families, friends and legal support when reaching a modern communication devices simply isn't possible.</Paragraph>
      </Box>
    </Flex>
  </Container>
</Section>
)
