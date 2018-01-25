/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { ListStyled } from 'foundry'
/* ------------------------------- Component -------------------------------- */
export default props => (
<ListStyled
  foundry={'Image'}
  styled={{
    m: 10,
    w: 50,
    h: 50,
    container: {
      p: 10,
      h: 120,
      w: 0.2,
    }
  }}
  data={props.data}
  handleOnClick={props.handleOnClick}
/>)