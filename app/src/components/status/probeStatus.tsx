import React from "react";

import { Col, Row, Container } from "react-bootstrap";

import useStyle from "./status.style";


import { BatteryStatusDisplay } from "./batteryStatus";
import { ConnectionStatusDisplay } from "./connectionStatus";

interface Props {    
    chargePercentage: number;
    connected: boolean;
}

export const ProbeStatusComponent:React.FC<Props> = props => {
    const styles = useStyle();
    
    
    return <Container>
        <Row className={styles.statusDisplay}>
        
            <Col>
                <ConnectionStatusDisplay connected={props.connected}/>
                </Col>
                <Col>
                <BatteryStatusDisplay chargePercentage={props.chargePercentage}/>
                </Col>
                                
            </Row>            
            </Container>
}