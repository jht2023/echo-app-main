import React from "react";
import {
  HashRouter as Router,
  Route,
  RouteComponentProps
} from "react-router-dom";

import * as TwoCols from "../layout/sidebar-layout";

import Header from "../components/bars/header";
import StatusBar from "../containers/statusBar/statusBar";


import {VieoViewerContainer} from "../containers/videoViewer/videoViewer";

import { SideBarTabMenu } from "../containers/sideBarTabMenu/sideBarTabMenu";

const MainScreenPaths = {
  home: "/home",  
  dashboard: "/dashboard"
};

const Routes: React.FC = () => {
      return <Router>
      <TwoCols.TwoColumnsLayout>
        <TwoCols.Title>
            <TwoCols.Header>
              <Header/>
            </TwoCols.Header>      
        </TwoCols.Title>
        <TwoCols.Title>
            <TwoCols.Header>
              <StatusBar/>
            </TwoCols.Header>      
        </TwoCols.Title>
      <TwoCols.TwoColumnsContent>    
        <TwoCols.FirstColumn>
            <Route path="/" component={MainMenuWrapper} />
        </TwoCols.FirstColumn>
        <TwoCols.SecondColumn>                      
          <Route path={MainScreenPaths.dashboard} component={VieoViewerContainer} />                        
          <Route exact={true} path="/" component={VieoViewerContainer} />
            
        </TwoCols.SecondColumn>
      </TwoCols.TwoColumnsContent>
    </TwoCols.TwoColumnsLayout>
  </Router>  
}
  

const MainMenuWrapper: React.FC<RouteComponentProps> = (props) => {  
  return <SideBarTabMenu />
}
export default Routes;
