import { ITheme } from "../../app-theme";

const { createUseStyles } = require('react-jss');

export default createUseStyles((theme: ITheme) => ({    
    statusBar: {        
        color: "#e9ecef",
        // fontSize: "40px",
        backgroundColor: theme.statusBarBackground,
        height: "100%",
        paddingTop: "5px",
        margin:"0px",        
    },    
    statusComponent: {
        height: "40px",
        backgroundColor: theme.infoDisplayBackground,
        borderRadius: "15px",
        border: '2px solid white' 
    },
    
}))