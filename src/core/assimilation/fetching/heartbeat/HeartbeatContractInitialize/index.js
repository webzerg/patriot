/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { connect } from 'react-redux';
import { compose, lifecycle, withProps } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import { fromUport } from 'assimilation/symbiosis/selectors'
import { uPortInitContractRequest } from 'assimilation/symbiosis/actions'
import UPortLoginAvatar from 'assimilation/display/uport/UPortLoginAvatar'
import Heartbeat from 'contracts/Heartbeat.json'
/* ---------------------------- Module Package ------------------------------ */
/*-* Redux *-*/
const mapStateToProps = (state, props) => ({
    data: fromUport.getDeltaData(state, `credentials`),
    status: fromUport.getDeltaStatus(state, `credentials`)
  }
)

const mapDispatchToProps = (dispatch, props) => ({
  uPortInitContractRequest: ()=>dispatch(uPortInitContractRequest({
    payload: {
      ethAbi: Heartbeat.abi,
    },
    metadata: {
      delta: 'heartbeat'
    }
  })),
})

const Display = props =><div onClick={()=>props.uPortInitContractRequest()}  >
Clickity Click
</div>

export default connect(mapStateToProps, mapDispatchToProps)(Display);