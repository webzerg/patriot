/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
/* ------------------------- Internal Dependencies -------------------------- */
import ComponentRender from './render';

/* ----------------------- Redux | State Management  ------------------------ */
import { getZoneDashboardLayout } from 'appStore/departments/theme/selectors'

/* ------------------------ Initialize Dependencies ------------------------- */

/* ---------------------------- Module Package ------------------------------ */

function mapStateToProps(state) {
  const layout = getZoneDashboardLayout(state, 'aside')
  return {layout};
}

const mapDispatchToProps = dispatch => ({

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ComponentRender));
