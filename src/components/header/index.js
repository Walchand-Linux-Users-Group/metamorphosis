import React from "react";
import Images from "../../assets";
import "./styles.css";

const Header = () => {
  return (
    <div className="comp-header ">
      <img src={Images.logo} alt="" className="logo" />
    </div>
  );
};

export default Header;
