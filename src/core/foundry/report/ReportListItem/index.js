/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import idx from './idx';

/* ------------------------- Internal Dependencies -------------------------- */
import Absolute from 'atoms/Absolute'
import BackgroundImage from 'atoms/BackgroundImage'
import Flex from 'atoms/Flex'
import Box from 'atoms/Box'
import Heading from 'atoms/Heading'
import Paragraph from 'atoms/Paragraph'
import Link from 'atoms/Link'
import HorizontalRule from 'atoms/HorizontalRule'

/* ------------------------------- Component -------------------------------- */
const mainLayout = {
  flex:['2 1 0'],
  bg:'white',
  bs:'0',
  br: 5,
  of:'hidden'
}

export default (props) => {
  /*--- Extraction ---*/
  const{ data } = props
  /*--- Extraction ---*/
  const id = idx(props, _ => _.id)
  const nameDisplay = idx(props, _ => _.name.nameDisplay)
  const addressAutoComplete = idx(props, _ => _.address.addressAutoComplete)
  const timePoint = idx(props, _ => _.time.timePoint)
  const datePoint = idx(props, _ => _.date.datePoint)

  if (!props.id) return null
  /*--- Component ---*/
  return <Flex 
    direction={['row']} 
    key={id}
    mb={[10,15]}
    {...props} 
    >
      <Box
        p={[10]}
      >
        <Link to={`/dashboard/${props.entity}/${id}`}>
          <Heading 
            f={[3,4]}
            level={3}
            children={nameDisplay} 
          />
        </Link>
        { !timePoint?null:
        <Paragraph f={[2]} level={3} fw={[300]}><strong>Time: </strong>{`${timePoint}`}</Paragraph>}
        { !datePoint?null:
        <Paragraph f={[2]} level={3} fw={[300]}><strong>Date: </strong>{`${datePoint}`}</Paragraph>}
      </Box>
    </Flex>
}