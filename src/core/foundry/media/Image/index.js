/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Image } from 'atomic'
/* ------------------------------- Component -------------------------------- */
export default props => { console.log(props); return <Image src={props.src} onClick={props.handleOnClick} {...props} {...props.styled} /> }