import React from "react";
import { Images } from "../../assets";
import "./styles.css";

const ImageHeader = () => {
  return (
    <div className="header-container">
      <img src={Images.header} className="header" />
    </div>
  );
};

export default ImageHeader;
