/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { svg, images, screen} from 'assets'

/*-* Atoms *-*/
import Flex from 'atoms/Flex'
import Box from 'atoms/Box'
import Container from 'atoms/Container'
import Heading from 'atoms/Heading'
import Paragraph from 'atoms/Paragraph'
import SVG from 'atoms/SVG'
import Button from 'atoms/Button'
import Link from 'atoms/Link'
import List from 'atoms/List'
import Span from 'atoms/Span'
import Shape from 'atoms/Shape'
import Section from 'atoms/Section'
import HorizontalRule from 'atoms/HorizontalRule'
import Image from 'atoms/Image'
import BackgroundGradient from 'atoms/BackgroundGradient'
import BackgroundImage from 'atoms/BackgroundImage'

/*-* Foundry *-*/

import { IconCircle } from 'foundry'
/* ------------------------------- Component -------------------------------- */
export default props => (<div>

  <Container w={[1120]} py={[15,25]} >
    <Heading level={[3]} f={[6,7]} color='blue' ta='center'>
      Get 🇺🇸 Involved
    </Heading>
  
    <Paragraph f={[2]} ta='center'>
      Rapid Response call-center tools and information network <br/>
      systems for empowering at-risk people, families, and communities.
    </Paragraph>
  
    <Flex justify='space-evenly' mt={20} >
      {/*Item 1*/}
      <Box
        bg='white'
        bs={1}
        ta='center'
        py={[15,20]}
        px={[15,25]}
        w={[1,1, 0.333333]}
      >
        <SVG svg={svg.uiPhone} svgColor='blue' h={100} />
        <Heading level={[3]} f={[3,4]}>
          Call Center
        </Heading>
        <Paragraph f={[1]}>
          Can you be available to manage incoming calls to the Rapid Response system? Add your availability into flexible scheduling system.
        </Paragraph>
        <Link to="/dashboard/volunteer">
          <Button gradien='blueLight' >Start Volunteering</Button>
        </Link>
      </Box>
      {/*Item 1*/}
      <Box
        bg='white'
        bs={1}
        ta='center'
        py={[15,20]}
        px={[15,25]}
        w={[1,1, 0.333333]}
      >
        <SVG svg={svg.uiCamera} svgColor='blue' h={100} />
        <Heading level={[3]} f={[3,4]}>
          Legal Observer
        </Heading>
        <Paragraph f={[1]}>
          Are you ready to jump into action during an emergency? Can you be a legal observer in times of crisis?
        </Paragraph>
        <Link to="/dashboard/legal-observer">
          <Button gradien='blueLight' >Add Your Schedule</Button>
        </Link>
      </Box>
      {/*Item 1*/}
      <Box
        bg='white'
        bs={1}
        ta='center'
        py={[15,20]}
        px={[15,25]}
        w={[1,1, 0.3]}
      >
        <SVG svg={svg.uiClipboard} svgColor='blue' h={100} />
        <Heading level={[3]} f={[3,4]}>
          Community Organizing
        </Heading>
        <Paragraph f={[1]}>
          Ready to participate in the larger conversation? Get notified of community actions and important upcoming events to support.
        </Paragraph>
        <Link to="/dashboard/community-organizing">
          <Button gradien='blueLight' >Get Active</Button>
        </Link>
      </Box>

    </Flex>
  </Container>
</div>)