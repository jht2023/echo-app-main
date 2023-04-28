import React from 'react';

import useStyle from './sidebar-layout.style';
import { Col, Container, Row } from 'react-bootstrap';

export const TwoColumnsLayout: React.FC = props => {
    const style = useStyle();

    return <div className={style.twoColumns}>
        {props.children}
    </div>
}

export const TwoColumnsContent: React.FC = props => {
    const style = useStyle();
    return <Container fluid>
        <Row>
            {props.children}
        </Row>
        </Container>

    // return <div className={style.twoColumnsContent}>
    //     {props.children}
    // </div>
}

export const FirstColumn: React.FC = props => {
    const style = useStyle();

    return <Col xs={3} sm={3} md={3} lg={3} xl={2} className={`no-float ${style.firstColumnRenewed}`}>
    {/* // return <Col className={"col-md-3 no-float"}> */}
            {props.children}
        </Col>    

    // return <div id="first-column" className={style.firstColumn}>
    //     {props.children}
    // </div>
}

export const SecondColumn: React.FC = props => {
    const style = useStyle();

    return <Col xs={8} sm={8} md={9} lg={9} xl={10} className={`no-float ${style.secondColumnRenewed}`}>
    {/* return <Col className={"col-md-9 no-float"}> */}
    {props.children}
    </Col>
    // return <div className={style.secondColumn}>
    //     {props.children}
    // </div>
}

export const Header: React.FC = props => {
    const style = useStyle();

    return <div className={style.header}>
        {props.children}
    </div>
}

export const Title: React.FC = props => {
    const style = useStyle();

    return <div className={style.title}>
        {props.children}
    </div>
}