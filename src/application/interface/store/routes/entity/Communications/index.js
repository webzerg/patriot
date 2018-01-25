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
<Route 
    exact
    path="/dashboard/communications/scheduling"
    component={FormHotlineAddPerson} 
    styled={{
      p:20
    }}
  />
  <Route exact path="/dashboard/communications" component={FirestoreFeed} 
    delta='EventsCalendar'
    collection='hotline' 
    foundry='DataCalendar'
    styled={{
      w: [1, 1, 0.5],
    }}
  />
  <Route path="/dashboard/communications/calls" component={FirestoreFeed} 
    delta='CallRecordSearch'
    collection='calls'
    foundry='DataTable'
    filters={
      {
        limit: 10
      }
    }
    columns={[
      {
        field: 'startTime',
        header: 'Start Time',
      },
      {
        field: 'endTime',
        header: 'End Time',
      },
      {
        field: 'status',
        header: 'Status',
      },
      {
        field: 'direction',
        header: 'Direction',
      },
      {
        field: 'duration',
        header: 'Duration',
      },
      {
        field: 'fromFormatted',
        header: 'From',
      },
      {
        field: 'to',
        header: 'To',
      },
    ]}
    styled={{
      w: [1, 1, 0.5],
    }}
  />

  <Route exact path="/dashboard/communications/sms" component={FirestoreFeed} 
    delta='MessagesSearch'
    collection='sms'
    foundry='DataTable'
    columns={[
      {
        field: 'status',
        header: 'Status',
      },
      {
        field: 'direction',
        header: 'Direction',
      },
      {
        field: 'body',
        header: 'Body',
      },
      {
        field: 'from',
        header: 'From',
      },
      {
        field: 'to',
        header: 'To',
      },
    ]}
  />
</div>