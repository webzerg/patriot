/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { asyncComponent } from 'react-async-component';
/* ------------------------- Internal Dependencies -------------------------- */
import Absolute from 'atoms/Absolute'
/*--- Zones ---*/
import DashboardHeader from 'layout/zones/dashboard/DashboardHeader'
import DashboardMain from 'layout/zones/dashboard/DashboardMain'
import DashboardAside from 'layout/zones/dashboard/DashboardAside'

/*--- Panels ---*/
import DashboardMainPanelLeft from 'layout/panels/dashboard/DashboardMainPanelLeft'
import DashboardMainPanelRight from 'layout/panels/dashboard/DashboardMainPanelRight'
import DashboardMainPanelContent from 'layout/panels/dashboard/DashboardMainPanelContent'

/*--- Routes ---*/
import DashboardMainRoutes from 'routes/dashboard/DashboardMainRoutes'
import DashboardHeaderRoutes  from 'routes/dashboard/DashboardHeaderRoutes'
import DashboardAsideRoutes from 'routes/dashboard/DashboardAsideRoutes'
import DashboardMainPanelLeftRoutes from 'routes/dashboard/DashboardMainPanelLeftRoutes'
import DashboardMainPanelRightRoutes from 'routes/dashboard/DashboardMainPanelRightRoutes'



/* ---------------------------- Module Package ------------------------------ */
export default  ({ zones, header, main, aside, ...props }) => 
<Absolute left right top bottom of='hidden' >
  {/* Header Zone */}
  {!zones.header ? null: (
    <DashboardHeader {...header.layout} >
      <DashboardHeaderRoutes/>
    </DashboardHeader>
  )}


  {/* Main Zone */}
  {!zones.main ? null: (
    <DashboardMain {...main.layout}>
      {!zones.panelLeft 
        ? null 
        :<DashboardMainPanelLeft {...main.regions.panelLeft.layout}>
          <PerfectScrollbar>
            <DashboardMainPanelLeftRoutes/>
          </PerfectScrollbar> 
        </DashboardMainPanelLeft>}
      {!zones.mainContent 
        ? null 
        :<DashboardMainPanelContent {...main.regions.content.layout}>
          <PerfectScrollbar>
            <DashboardMainRoutes/>
          </PerfectScrollbar> 
        </DashboardMainPanelContent>}
      {!zones.panelRight 
        ? null 
        :<DashboardMainPanelRight {...main.regions.panelRight.layout}>
          <PerfectScrollbar>
            <DashboardMainPanelRightRoutes/>
          </PerfectScrollbar> 
        </DashboardMainPanelRight>}
    </DashboardMain>
  )}

  {/* Aside Zone */}
  {!zones.aside ? null :(
    <DashboardAside {...aside.layout}>
      <PerfectScrollbar >
        <DashboardAsideRoutes/>
      </PerfectScrollbar>
    </DashboardAside>
  )}
</Absolute>