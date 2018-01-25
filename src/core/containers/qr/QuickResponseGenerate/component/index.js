/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import kjua from 'kjua'
/* ------------------------- Internal Dependencies -------------------------- */
import { 
  Flex, Box, Heading, Image
} from 'atomic'

/* ------------------------------- Component -------------------------------- */
export default (props) => {

const QRRendered = kjua({
    text: props.qr || 'test',
    fill: '#0619ac',
    size: 300,
    back: 'rgba(255,255,255,1)'
  })

  console.log(QRRendered.src)

return <Box>
  <Heading level={[3]} f={[3]}>
    Generated QR Code
  </Heading>
  
<Image src={QRRendered.src}/>

</Box>
}