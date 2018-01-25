/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'
import { FirestoreList} from 'containers'
import PerfectScrollbar from 'react-perfect-scrollbar'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
}from 'atomic'
import { 
  FrontIntroduction,
  FrontJourney,
  FrontPrograms,
  FrontProjectsActive,
  FrontProjectsSubmit,
  FrontOrganizationSearch,
  FrontResourcesSearch,
  FrontArticleSearch,
} from 'smithing/sections'
import { CommunityPrograms } from 'smithing/blocks'

import {
  FirestoreListCompose
} from 'containers'

import {
  MapAdvancedCompose,
  MapAdvancedMarkersCompose,
  FormAddContributorPerson,
 } from 'foundry'

/* ------------------------------- Component -------------------------------- */
export default props => (
<div>
   <Container w={[1]} >
     <Flex
      direction=""
      justify={"stretch"}
      >
      <Box
        color='white'
        gradient='cherry'
        p={20} width={[1,1,0.3]} >
        <Heading level={[3]} f={[5,6]}>
          Latest Reports
        </Heading>
        <Link to="/dashboard/reports">
          <Button>
            View Dashboard
          </Button>
        </Link>
        <Box h={[270,370,450]} >
          <PerfectScrollbar>
            <FirestoreList
              collection={'reports'}
              delta={'reportsSearch'}
              entity={'report'}
              foundry='ReportListItem'
              filters={{
                where: [
                  ['public', '==', true]
                ]
              }}
              styled={{
                color: 'white',
                w: [1],
              }}
            />
          </PerfectScrollbar>
        </Box>
      </Box>
      <Box width={[1,1,0.7]} >
       <MapAdvancedMarkersCompose
        collection={'reports'}
        delta={`reportsSearch`}
        foundry='ReportMarkerDot'
        menu={'reports'}
        styledMap={{h:[320,420,600]}} 
        />
      </Box>
     </Flex>
   </Container>
   <FrontIntroduction/>
</div>
)
