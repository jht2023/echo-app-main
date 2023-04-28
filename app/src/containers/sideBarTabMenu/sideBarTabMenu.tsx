import React, { useState } from "react";
import { Col, Container, Dropdown, Row, Navbar, Nav, Tabs, Tab } from 'react-bootstrap';

import probe from "../../assets/probe.png";
import ruler from "../../assets/ruler.png";
import chat from "../../assets/chat.png"

import useStyle from "./sideBarTabMenu.style";


import { ProbeContainer } from "./probeContainer";
import { ChatContainer } from "./chatContainer";
import { RulerContainer } from "./rulerContainer";

export interface Props {  
}

export const SideBarTabMenu: React.FC<Props> = props => {
    const [key, setKey] = useState('field');
    const styles = useStyle();
    return (        
                <Tabs
                    activeKey={key}
                    onSelect={(k) => setKey(k as string)}
                >
                    <Tab eventKey="field" title={<img className={styles.tabIcon} src={probe} />}>
                        <ProbeContainer />                    
                    </Tab>           
                    <Tab eventKey="soil" title={<img className={styles.tabIcon} src={chat} />}>
                        <ChatContainer />
                    </Tab>         
                    <Tab eventKey="nodes" title={<img className={styles.tabIcon} src={ruler} />}>
                        <Container>
                            <RulerContainer />
                        </Container>
                    </Tab>         
                </Tabs>                            
  );
};
