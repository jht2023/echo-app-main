import { ITheme } from "../../app-theme";

const { createUseStyles } = require('react-jss');

export default createUseStyles((theme: ITheme) => ({    
    body: {
        display:"flex",            
        flexDirection:"column",    
        justifyContent:"center",
        alignItems:"center",
        width:"60%",     
        // paddingLeft:"10em", 
        // paddingRight:"10em", 
        paddingTop:"3em",
        paddingBottom:"5em",
        fontSize: "18px",
        margin: "0 auto",        
    },    
    header: {
        display:"flex",
        flexDirection:"row",
        fontSize:"40px"
        // position:"absolute"
    },
    picture: {
        width: "50%"
    },
    sponsorLogo: {
        width: "20%"
    }
}))