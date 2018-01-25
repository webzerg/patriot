import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'atomic' 
import { FirestoreList, FirestoreDocument, FirestoreTable, FirestoreFeed } from 'containers'
import {
  MapAdvancedCompose,
  UserProfileDashboard,
  PrimeDataTable,
  DataTable,
  DataCalendar,
  FormAddContributorPerson,
  FormHotlineAddPerson,
 } from 'foundry'

import {
  ArticleAddFull,
  OrganizationAddFull,
  PersonAddFull,
  ProjectAddFull,
  ResourceAddFull,
} from 'entity'

export default props => 
<div>
  {/*--- Article
    + Top (news) 
    - news/map => MapAdvancedCompose
    - news => MapAdvancedCompose
    - news => FirestoreList
    + Switch (article)
      - article/add => ArticleAddFull
      - article => FirestoreDocument
  ---*/}
  <Route exact path="/dashboard/articles" component={FirestoreList} 
    delta='ArticleSearch'
    entity='article'
    foundry='EntityCardDashboard'
    styled={{
      w: [1, 1, 0.5],
    }}
  />
  <Switch>
    <Route exact path="/dashboard/article/add" component={ArticleAddFull} />
    <Route path="/dashboard/article/:eid" component={FirestoreDocument}
      collection="articles"
      foundry={'ArticleProfileEntry'}
     />
  </Switch>
</div>