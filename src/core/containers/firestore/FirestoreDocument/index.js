/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { connect } from 'react-redux'
import {
  compose,
  lifecycle,
} from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import { Item } from 'foundry'
import {firestoreDocumentGetRequest} from 'store/departments/actions'
import {fromFirestore} from 'store/departments/selectors'
/* ---------------------------- Module Package ------------------------------ */
/*---*--- Lifecylce Methods ---*---*/
const queryLifecycle = lifecycle(
{
  componentDidMount()
  {
    const { eid } = this.props.match.params
    this.props.firestoreDocumentGetRequest({
      metadata:
      {
        branch: [
          this.props.collection,
          eid,
        ],
        delta: eid,
      }
    })
  }
})

/*---*--- Redux ---*---*/
const mapStateToProps = (state, props)=> ({
  eid: props.match.params.eid,
  data: fromFirestore.getQueryData(state, props.match.params.eid)
})

const mapDispatchToProps = (dispatch, props) => ({
  firestoreDocumentGetRequest: (request)=>dispatch(firestoreDocumentGetRequest(request))
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
)(Item);
