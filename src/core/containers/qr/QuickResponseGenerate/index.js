/* ------------------------- External Dependencies -------------------------- */
import kjua from 'kjua'
import { connect } from 'react-redux'
import { compose, lifecycle} from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */

/* ------------------------ Initialize Dependencies ------------------------- */
/*--- Redux Store ---*/
import { fromIntercom } from 'store/departments/selectors'

import Component from './component'
/* ---------------------------- Module Package ------------------------------ */

/*---*--- Redux ---*---*/
const mapStateToProps = (state, props) => ({

})

/*---*--- Lifecylce Methods ---*---*/
const QueryLifecycle = lifecycle(
{
  /*--- Did Mount | BEGIN ---*/
  componentDidMount()
  {

  },
  /*--- Did Mount | END ---*/

  /*--- Did Update | BEGIN ---*/
  componentDidUpdate(prevProps)
  {

  }
  /*--- Did Update | End ---*/

})

export default compose(
  connect(mapStateToProps),
  QueryLifecycle,
)(Component);
