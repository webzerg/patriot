/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Switch } from 'react-router-dom';
import {Route} from 'atomic'
/* ------------------------- Internal Dependencies -------------------------- */
import {
  PersonSearch,
} from 'entity'
import {
  FormStatusUpdate,
} from 'foundry'

import FormCallSearch from 'smithing/forms/twilio/FormCallSearch'
// import FormSmsSearch from 'smithing/forms/twilio/FormSmsSearch'

/* ------------------------------- Component -------------------------------- */
export default () => 
<div>
  <Route exact path="/dashboard/people" 
    component={PersonSearch} 
    collection="people"
    entity="person"
  />
  <Route exact path="/dashboard/communications/calls" 
    component={FormCallSearch} 
    collection="calls"
  />
  {/*<Route exact path="/dashboard/communications/sms" 
    component={FormSmsSearch} 
    collection="sms"
  />*/}

</div>
