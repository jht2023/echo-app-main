import React from "react";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";

export interface Props {  
}

export const ChatContainer: React.FC<Props> = props => {
  return (
    <Container>
    <Row>
        <p>Chat</p>
    </Row>    
    </Container>
  );
};
