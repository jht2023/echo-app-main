import React from "react";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";

export interface Props {  
}

export const RulerContainer: React.FC<Props> = props => {
  return (
    <Container>
    <Row>
        <p>Ruler</p>
    </Row>    
    </Container>
  );
};
