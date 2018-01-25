/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import { Route } from 'atomic' 
/* ------------------------- External Dependencies -------------------------- */
import { fromAuthentication } from 'appStore/departments/selectors'
import {
  UserProfileDashboard,
  ProvidersInitialize,
 } from 'foundry'

import Home from 'smithing/pages/dashboard/Home'
// Entity Entry Points
import RoutesEntityPerson from 'routes/entity/Person'
import RoutesEntityReport from 'routes/entity/Report'
import RoutesEntityCommunications from 'routes/entity/Communications'
import { TwilioManualCallSync, TwilioManualMessageSync } from 'containers'
/* ------------------------------- Component -------------------------------- */
const Twilio = props =>
<div>
  <TwilioManualCallSync/>
  <TwilioManualMessageSync/>
</div>

const DashboardMainRoutes = props => (
<div>
  
  <Route
    exact
    path='/dashboard'
    component={Twilio}
  />
  <Route
    exact
    path='/dashboard'
    component={Home}
  />
  <RoutesEntityCommunications/>
  
  <RoutesEntityReport
    collection={'reports'}
    entity={'report'}
  />


    <RoutesEntityPerson
    {...props} 
  />
  
  <Route path="/dashboard/profile" component={UserProfileDashboard} />
</div>);


const mapStateToProps = (state, props) => ({
    authentication: {
      uid: fromAuthentication.getUserId(state)
    }
  }
)

export default connect(mapStateToProps)(DashboardMainRoutes)