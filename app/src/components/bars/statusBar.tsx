import React from "react";
import { Col, Container, Row } from 'react-bootstrap';
import useStyle from "./statusBar.style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProbeStatusComponent } from "../status/probeStatus";
import { TabletStatusComponent } from "../status/tabletStatus";
import { UserStatusComponent } from "../status/userStatus";

interface Props {

}

export const StatusBar: React.FC<Props> = props => {
  const styles = useStyle();
  return <Container className={styles.statusBar}>
    <Row >
      <Col> 
        <Row className={styles.statusComponent}>
          <UserStatusComponent />       
        </Row>   
      </Col>
      <Col>
        <Row className={styles.statusComponent}>
          <ProbeStatusComponent connected={true} chargePercentage={80} />
        </Row>  
      </Col>
      <Col>
        <Row className={styles.statusComponent}>
          <TabletStatusComponent chargePercentage={80} />
        </Row>  
      </Col>    
    </Row>
  </Container>
};
