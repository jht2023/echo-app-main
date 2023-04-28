import React from "react";

import { Col, Row, Container } from "react-bootstrap";

import useStyle from "./status.style";


interface Props {    
    
}

export const UserStatusComponent:React.FC<Props> = props => {
    const styles = useStyle();        
    return <Container>
        <Row className={styles.userComponent}>
            <Col sm>
            id: 123
            </Col>                    
            <Col sm>
            Age: 20
            </Col>                    
            <Col sm>
            Sex: M
            </Col>                    
            <Col sm>
            DOB: 12344
            </Col>                    
        </Row>           
        <Row className={styles.userComponent}>
        <Col>
        Name: Masayuki Tanabe
        </Col>
        </Row> 
    </Container>
}