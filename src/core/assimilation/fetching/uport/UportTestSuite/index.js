/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { connect } from 'react-redux';
import { compose, lifecycle, withProps } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import { fromUport } from 'assimilation/symbiosis/selectors'
import { 
  uPortGetCredentialsRequest,
  uPortGetWeb3Request,
  uPortGetProviderRequest,
} from 'assimilation/symbiosis/actions'

import UPortLoginAvatar from 'assimilation/display/uport/UPortLoginAvatar'
/* ---------------------------- Module Package ------------------------------ */
/*---*--- Lifecylce Methods ---*---*/
const QueryLifecycle = lifecycle({
  /*--- Component Mount ---*/
  componentDidMount() {
    this.props.uPortGetWeb3Request()
    this.props.uPortGetProviderRequest()
  }, 

  /*--- Component Update ---*/
  componentDidUpdate(prevProps) {
    if(this.props.submitting === true) {
      this.props.reset()
    }
  }
})


/*-* Redux *-*/
const mapStateToProps = (state, props) => ({
    data: fromUport.getDeltaData(state, `credentials`),
    status: fromUport.getDeltaStatus(state, `credentials`)
  }
)

const mapDispatchToProps = (dispatch, props) => ({
  uPortGetWeb3Request: ()=>dispatch(uPortGetWeb3Request({})),
  uPortGetProviderRequest: ()=>dispatch(uPortGetProviderRequest({})),
  uPortGetCredentialsRequest: ()=>dispatch(uPortGetCredentialsRequest({
    payload: {
      requested: ['name', 'firebase', 'email', 'phone', 'avatar'],
      notifications: true
    },
    metadata: {
      delta: 'credentials'
    }
  })),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  QueryLifecycle,
)(UPortLoginAvatar);
