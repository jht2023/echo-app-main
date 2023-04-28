import React from "react";

import useStyle from "./general.style";

import Logo from "../../assets/logo.png"
// import Name from "../assets/name2.png"

interface Props {

}

const Header: React.FC<Props> = props => {
  const styles = useStyle();
  return <div className={styles.header}>
          <img height={50} src={Logo}/>
          <p>Echo App</p>
          {/* <img height={50} src={Name}/> */}
          </div>
};

export default Header;