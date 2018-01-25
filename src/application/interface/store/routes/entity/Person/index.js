import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Switch } from 'react-router-dom';
import { Absolute, Route } from 'atomic' 
import { FirestoreList, FirestoreDocument, FirestoreTable, FirestoreFeed } from 'containers'
import {
  MapAdvancedCompose,

  DataTable,
 } from 'foundry'

import {
  PersonAddFull,
} from 'entity'
import EntityCoreSearchMap from '../EntityCoreSearchMap'
export default props => !props.collection === 'people' ? null :
<div>
{/*--- Person
    + Top (people) 
    - people/map => MapAdvancedCompose
    - people => MapAdvancedCompose
    - people => FirestoreList
    + Switch (person)
      - person/add => PersonAddFull
      - person => FirestoreDocument
  ---*/}
  <EntityCoreSearchMap
  collection={props.collection}
  entity={props.entity}
/>
  <Route exact path="/dashboard/people/map" component={MapAdvancedCompose}
  delta='PersonSearch' 
    collection='people' 
    foundry='PersonMarkerPopover'
    styledMap={{h:[320,420,660]}} 
   />
  <Route exact path="/dashboard/people" component={MapAdvancedCompose} 
    delta='PersonSearch' 
    collection='people' 
    foundry='PersonMarkerPopover'
    styledMap={{h:[200,280]}} 
  />

  <Absolute top bottom left right mt={[200,280]} >
   <PerfectScrollbar>
    <Route exact path="/dashboard/people" component={FirestoreList} 
      collection='people'
      delta='PersonSearch'
      entity='person'
      foundry='PersonCardDashboard'
      styled={{
        w: [1, 1, 0.5],
      }}
    />
  </PerfectScrollbar>
  </Absolute>
  <Switch>
    <Route 
      exact
      path="/dashboard/person/add" 
      component={PersonAddFull}
    />
    <Route
      path="/dashboard/person/:eid"
      component={FirestoreDocument}
      collection="people"
      entity="person"
      foundry={'PersonProfileEntry'}
      {...props}
     />
  </Switch>
</div>