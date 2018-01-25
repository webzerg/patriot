/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react';
import { Switch } from 'react-router-dom';
import {Route} from 'atomic'
/* ------------------------- External Dependencies -------------------------- */
import mainRoutes from 'smithing/pages/main'
import Front from 'smithing/pages/main/Front'

import { FirestoreList, FirestoreDocument } from 'containers'
const PageRoutes = []
_.forEach(mainRoutes, (parent, parentKey)=> {
  const path = `/${parentKey.split(/(?=[A-Z])/)[1].toLowerCase()}`
  const RouteChildren =[]; _.forEach(parent, (component, key)=> key === 'Root' 
  ? null : RouteChildren.push({component,path: `/${key.split(/(?=[A-Z])/).join('/').toLowerCase()}/`}))
  const RouteTree = ()=>(
  <Switch>
    {RouteChildren.reverse().map(route=><Route path={route.path} component={route.component} /> )}
    <Route path={path} component={parent.Root} />
  </Switch>)

  PageRoutes.push(<Route path={path} component={RouteTree} />)
})

export default () => (
  <div>
    <Switch>
      <Route path="/article/:eid" component={FirestoreDocument}
        collection="articles"
        entity="article"
        foundry={'EntityCardLarge'}
      />
      <Route path="/person/:eid" component={FirestoreDocument}
        collection="people"
        entity="person"
        foundry={'EntityCardLarge'}
      />
      <Route path="/project/:eid" component={FirestoreDocument}
        collection="projects"
        entity="project"
        foundry={'EntityCardLarge'}
      />
      <Route path="/resource/:eid" component={FirestoreDocument}
        collection="resources"
        entity="resource"
        foundry={'EntityCardLarge'}
      />
      <Route path="/organization/:eid" component={FirestoreDocument}
        collection="organizations"
        entity="organization"
        foundry={'EntityCardLarge'}
      />
      {PageRoutes.map(Route=>Route)}
      <Route exact path="/" component={Front} />
    </Switch>
  </div>);
