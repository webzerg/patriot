/* ------------------------- External Dependencies -------------------------- */
import idx from './idx';
import React from 'react'
import { branch,compose,renderComponent } from 'recompose'
import { Switch } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import {Absolute, Flex, Box, Route, Heading, Markdown, SpinnerSquares }from 'atomic'
import {
  FirestoreListCompose
} from 'containers'
import {
  ImageList,
  EntityDeleteButton,
  FormContentBasics,
  MapCore,
  ReportOverview,
} from 'foundry'
import {
  FormEntityEdit,
  EntityProfileHero,
  EntityProfileGallery,
  EntityProfileInterfaceBiography,
  EntityProfileInterfaceIdentity,
} from 'entity'
import {
  FirestoreDelete
} from 'containers'
/* ------------------------------- Component -------------------------------- */

const Routes = props => {
let contributors = idx(props.data, _ => _.contributors.contributorsFormatted), contributorsRef
if(contributors) contributorsRef = contributors.map(i=> i.eid)
const contentBody = idx(props.data, _ => _.content.contentBody)
let name = idx(props.data, _ => _.name)
let images = idx(props.data, _ => _.images)
let date = idx(props.data, _ => _.date)
let time = idx(props.data, _ => _.time)
let report = idx(props.data, _ => _.report)
return <Box>
<Route exact path="/dashboard/:entity/:eid"
  component={MapCore}
  collection={props.collection}
  foundry='ReportMarker'
  data={props.data}
  styledMap={{h:[200,280,300]}} 
/>
<Route exact path="/dashboard/:entity/:eid"
  component={ReportOverview}
  date={date}
  name={name}
  report={report}
  time={time}
/>
<Box p={[20,35]}>
{/*--- Profile::Entity (/:eid)---*/}

{!contentBody ? null :
<Route
  exact
  path="/dashboard/:entity/:eid"
  component={Markdown}
  source={contentBody}
  bg='white'
  br={10}
  bs={2}
  mb={20}
  p={[20,30]}
/>}

{/*--- Edit::Entity (/:eid/edit)---*/}
{!props ? null : 
<Route
  exact 
  path="/dashboard/:entity/:eid/edit"
  component={FormEntityEdit}
  collection={props.collection}
  data={props.data}
  /> }
{/*--- Administrator::Entity (/:eid/administrator)---*/}
{!(props.data && props.data.id) ? null : 
<Route 
  exact
  path="/dashboard/:entity/:eid/settings/administrator" 
  component={EntityDeleteButton} 
  id={props.data.id}
  collection={props.collection}
  gradient='cherry'
/> }

</Box>
</Box>
}

const spinnerWhileLoading = (test) => branch(test,renderComponent(()=><SpinnerSquares gradient='cherry' />))
export default compose(
  spinnerWhileLoading(
    (props) =>!(props.data && props.data.id) ? true : false
  ),
)(Routes);

