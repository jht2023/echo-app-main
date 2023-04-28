import { ITheme } from "../app-theme";

const { createUseStyles } = require("react-jss");

export default createUseStyles((theme: ITheme) => ({
  twoColumns: {    
    width: "100%",
    height: "100vh",
  },
  twoColumnsContent: {
    display: "flex",
    flexDirection: "row",
    flex: "1",    
    width: "100%",
    // height: "100vh",
    height:"100%"
  },
  firstColumn: {
    flexDirection:"column",
    width: "110px",
    backgroundColor: theme.menuColors,    
    padding: "1em 0",
    display: "inline-block",
    textAlign: "center",    
  },
  firstColumnRenewed: {
    flexDirection:"column",
    // width: "110px",    
    minHeight:"1250px",
    backgroundColor: theme.sidebarBackground,    
    paddingTop: "1em",
    //paddingLeft: "1em",
    padding: "1em",
    display: "inline-block",
    textAlign: "center",    
  },
  secondColumnRenewed: {    
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",        
    backgroundColor: theme.lightBackground,        
  },
  secondColumn: {
    flex: 4,    
    flexShrink: 1,
    flexGrow: 1,
    backgroundColor: theme.lightBackground,    
    // marginLeft: "6em",
    // marginTop: "6em",
  },
  title: {
    width: "100%",
    height: "50px",    
    display: "flex",
    flexDirection: "row",
  },

  header: {
    display: "inline-block",    
    backgroundColor: theme.headerBackground,
    flex: "0 0 100%"
  }
}));