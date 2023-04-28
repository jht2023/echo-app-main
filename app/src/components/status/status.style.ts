import { ITheme } from "../../app-theme";

const { createUseStyles } = require('react-jss');

export default createUseStyles((theme: ITheme) => ({
    batteryIcon: {
        width:"20px",                
    },
    batteryInfos: {        
        width: "40%"
    },
    statusDisplay: {        
        height: "90%",
        font: "sans-serif"        
    },
    smallIcon: {
        width:"20px",                
    },    
    singleInfoComponent: {
        width: "20px"
    },
    userComponent: {
        fontSize: "12px"
    }

}))