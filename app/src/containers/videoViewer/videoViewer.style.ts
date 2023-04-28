import { ITheme } from "../../app-theme";

const { createUseStyles } = require('react-jss');

export default createUseStyles((theme: ITheme) => ({
    body: {
        paddingTop:"10px",        
    },
    videoRow: {
        placeContent: "center"
    }
    
}))