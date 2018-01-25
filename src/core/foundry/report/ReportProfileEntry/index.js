/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { connect } from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Absolute, Route } from 'atomic' 
/* ------------------------- Internal Dependencies -------------------------- */
import { fromTheme } from 'store/departments/selectors'
import {
  EntityProfileEntryDefaults,
} from 'foundry'
import {
  FormAddContributorPerson,
  ReportEntryMain,
 } from 'foundry'
import { 
  EntityProfileMenu,
  EntityProfileInterfaceIdentity
} from 'entity'
/* ------------------------------- Component -------------------------------- */
const Profile = ({ entityLayout, ...props}) => 
<div>
<Absolute {...entityLayout.absoluteLeft}>
<PerfectScrollbar>
  <ReportEntryMain data={{...props.data}} /> {/* Default Entity Profile Routes/Containers/Components */}
</PerfectScrollbar>
</Absolute>
<Absolute {...entityLayout.absoluteRight}>
<PerfectScrollbar>
  <EntityProfileInterfaceIdentity data={{...props.data}} />
  <EntityProfileMenu menu={props.entity} data={{...props.data}} />
</PerfectScrollbar>
</Absolute>
</div>

const mapStateToProps = (state, props) => ({
    entityLayout: fromTheme.getDelta(state, 'entityProfileLayout')
  }
)

export default connect(mapStateToProps)(Profile)