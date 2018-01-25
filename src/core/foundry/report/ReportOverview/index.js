/* ------------------------- External Dependencies -------------------------- */
import idx from './idx';
import React from 'react'
import { Absolute } from 'particles'
import {
 Flex, Box, BackgroundImage, BackgroundGradient, Heading, Route, Paragraph
} from 'atomic'
import {
  ImageList,
  FormBannerAdd,
  VideoEmbed,
} from 'foundry'
/* ------------------------------- Component -------------------------------- */
export default props => 
<Box p={[15,25]} >
  { !idx(props, _ => _.name.nameDisplay) ? null :
  <Heading f={[4,5]} level={3} children={idx(props, _ => _.name.nameDisplay)} />}
  { !idx(props, _ => _.date.datePoint) ? null :
    <Heading level={[3]} f={[3]}>
      Date: {`${props.date.datePoint}`}
    </Heading>
  }
  { !idx(props, _ => _.time.timePoint) ? null :
    <Heading level={[3]} f={[3]}>
      Time: {`${props.time.timePoint}`}
    </Heading>
  }
  { !idx(props, _ => _.report.reportSummary) ? null :
  <div>
    <Heading level={[3]} f={[3,4]}>
      Summary
    </Heading>
    <Paragraph f={[1,2]} level={3} children={idx(props, _ => _.report.reportSummary)}/>
  </div>  
  }
  { !idx(props, _ => _.report.reportDescription) ? null :
  <div>
    <Heading level={[3]} f={[3,4]}>
      Description
    </Heading>
    <Paragraph f={[1,2]} level={3} children={idx(props, _ => _.report.reportDescription)}/>
  </div>   
  }

  {!idx(props, _ => _.metadata.metadataVideo) ? null : 
  <Box z={10}><VideoEmbed url={idx(props, _ => _.metadata.metadataVideo)}/></Box>}
</Box>