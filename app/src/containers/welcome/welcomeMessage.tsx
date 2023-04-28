import React from "react";
import useStyle from "./welcomeMessage.style";

import logo from "../../assets/logo.png"
import jstageLogo from "../../assets/jstage.png"

interface Props {    
}

const WelcomeContainer: React.FC<Props> = props => {
    
    const styles = useStyle();
    return (
        <div className={styles.body}>
            <img className={styles.picture} src={logo}/>
            <p>
            <br></br>
            Welcome to the <b>Echo App Project</b>, the new way of checking your gut health.
            </p>
            <p>
            Supported by J-Stage.
            </p>            
            <img className={styles.sponsorLogo} src={jstageLogo}/>
        </div>
    )
};

export default WelcomeContainer;