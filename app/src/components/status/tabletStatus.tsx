import React from "react";

import { Card, Col, Row, Container } from "react-bootstrap";

import useStyle from "./status.style";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faTablet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BatteryStatusDisplay } from "./batteryStatus";


interface Props {    
    chargePercentage: number;    
}

export const TabletStatusComponent:React.FC<Props> = props => {
    const styles = useStyle();        
    return <Container>
        <Row className={styles.statusDisplay}>
        <Col sm>
        <FontAwesomeIcon icon={faTablet as IconProp}/>        
        </Col>
            <Col xl>
            <p>Tablet Status</p>
            </Col>        
            <Col sm>
                <BatteryStatusDisplay chargePercentage={props.chargePercentage}/>
            </Col>                        
        </Row>            
    </Container>
}