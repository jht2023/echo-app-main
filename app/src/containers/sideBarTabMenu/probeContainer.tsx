import React from "react";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

export interface Props {  
}

export const ProbeContainer: React.FC<Props> = props => {
  return (
    <ButtonGroup vertical>      
      <Button>
        Focus (middle)
      </Button>
      <Button>
        Steer ()
      </Button>
      
    </ButtonGroup>
  );
};
