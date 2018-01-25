import React from 'react';
import EntityCore from '../EntityCore'
import EntityCoreSearchMap from '../EntityCoreSearchMap'
import { Route } from 'atomic' 
export default props => !props.collection === 'projects' ? null :
<div>
<EntityCoreSearchMap
  collection={props.collection}
  entity={props.entity}
/>
<EntityCore
  collection={props.collection}
  entity={props.entity}
  foundryProfile='ReportProfileEntry'
  formExtend='ReportAdd'
/>
</div>