/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Switch } from 'react-router-dom';
import {Route} from 'atomic'
/* ------------------------- Internal Dependencies -------------------------- */
import { FirestoreList, FirestoreDocument, FirestoreTable, FirestoreFeed } from 'containers'
import {
  ReportAdd,
  ReportAddFullDescription,
  ReportSearch,

  PersonAdd,
  PersonAddFullDescription,
  PersonSearch,

} from 'entity'

import { TwilioManualCallSync, TwilioManualMessageSync } from 'containers'
/* ------------------------------- Component -------------------------------- */
export default () => 
<div>

  {/* People */}
  <Route exact path="/dashboard/communications/manage" component={PersonSearch} />
  <Route exact path="/dashboard/people" component={PersonAdd} />
  <Route exact path="/dashboard/person/add" component={PersonAddFullDescription} />

  <Route exact path="/dashboard/communications/calls" component={TwilioManualCallSync}
    w={200}
  />
  <Route exact path="/dashboard/communications/sms" component={TwilioManualMessageSync} 
    w={200}
  />

  <Route 
    exact 
    path="/dashboard/communications/scheduling"
    component={FirestoreFeed} 
    delta='HotlineAllSearch'
    collection='hotline' 
    foundry='DataCalendar'
    styledContainer={{
      gradient: 'cherry',
      w: 700
    }}
    styledCalendar={{
      bg:'white',
      p: 10,
      m:20
    }}
  />

</div>
