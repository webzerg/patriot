/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Route } from 'atomic'
/* ------------------------- External Dependencies -------------------------- */
import RegionBranding  from 'smithing/regions/RegionBranding'

export default () =>
<div>
<Route path="/dashboard" component={RegionBranding} />
</div>