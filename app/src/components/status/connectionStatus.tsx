import React from "react";

import useStyle from "./status.style"

import disconnected from "../../assets/nowifi.png";
import connected from "../../assets/antenna.png";
import { Col, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faWifi } from "@fortawesome/free-solid-svg-icons";
interface Props {    
    connected: boolean;
}

export const ConnectionStatusDisplay:React.FC<Props> = props => {
    const styles = useStyle();
            
    return <Row className={styles.userComponent}>
        <Col>
        <p>Probe Status</p>
        </Col>
    <Col>
    <Row>
    <FontAwesomeIcon icon={faWifi as IconProp}/> 
    </Row>
    <Row>
    <p>{props.connected?"Connected":"Disconnected"}</p>
    </Row>    
       
    </Col>
    
    </Row>
}