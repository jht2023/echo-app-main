import { ITheme } from "../../app-theme";

const { createUseStyles } = require('react-jss');

export default createUseStyles((theme: ITheme) => ({
    uploadBody: {
        width:"50%",        
        
    },    
    header: {
        display:"flex",
        flexDirection:"row",
        color: "#e9ecef",
        fontSize: "40px",
        // position:"absolute"
    },
    statusBar: {
        display:"flex",
        flexDirection:"row",
        color: "#e9ecef",
        fontSize: "40px",
        backgroundColor: theme.statusBarBackground
    },    
    spinner: {
        width: "6rem",
        height: "6rem"
    }
}))