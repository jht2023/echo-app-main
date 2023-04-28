import React from "react";

import useStyle from "./status.style"

import { faBatteryFull, faBatteryHalf, faBatteryQuarter, faBatteryThreeQuarters, faBatteryEmpty } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Col, Row, Container } from "react-bootstrap";

interface Props {    
    chargePercentage: number;
}

export const BatteryStatusDisplay:React.FC<Props> = props => {
    const styles = useStyle();
        
    let displayIcon = faBatteryFull as any;

    if (props.chargePercentage == 0)
        displayIcon = faBatteryEmpty
    if (props.chargePercentage > 0)
        displayIcon = faBatteryQuarter
    if (props.chargePercentage > 45)
        displayIcon = faBatteryHalf
    if (props.chargePercentage > 65)
        displayIcon = faBatteryThreeQuarters
    if (props.chargePercentage == 100) 
        displayIcon = faBatteryFull
    
    return <Row>
        <Col sm>
        <FontAwesomeIcon icon={displayIcon as IconProp}/>
        </Col>
        <Col sm>
        {props.chargePercentage} % 
        </Col>
        </Row>
        
}