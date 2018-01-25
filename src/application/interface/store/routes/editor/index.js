/* --------------------------- Interface Globals ---------------------------- */
import './theme/stylesheet/app.global.css'
import './theme/stylesheet/plugins.global.css'
import './theme/inject'
/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import {Route} from 'atomic'
import EditorPage from 'foundry/editor/EditorPage'
import EditorInterface from 'workshop/editor/EditorInterface'
/* ------------------------- Internal Dependencies -------------------------- */
import Providers from './components/providers'
import Routes from './store/routes/entry';

import RegisterPerson from 'smithing/forms/register/RegisterPerson'
/* ---------------------------- Initialization ------------------------------ */
export default ({ store, history }) =>
<div>
  <Route
    exact
    path="/register/volunteer"
    component={RegisterPerson} 
  />
</div>