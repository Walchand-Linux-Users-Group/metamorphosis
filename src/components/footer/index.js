import { fontSize } from "@mui/system";
import React from "react";
import { SocialIcon } from "react-social-icons";
import "./styles.css";

const Footer = () => {
  return (
    <div className="comp-footer ">
      <div className="comp-footer-content">
        <p align="center" className="">
          Connect us
        </p>
        <div className="socials mb-3">
          <SocialIcon
            url="https://instagram.com/wcewlug"
            style={{ height: "30px", width: "30px" }}
            bgColor="white"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/wlug-club-3a9236117/"
            style={{ height: "30px", width: "30px" }}
            bgColor="white"
          />
          <SocialIcon
            url="https://twitter.com/wcewlug"
            style={{ height: "30px", width: "30px" }}
            bgColor="white"
          />
          <SocialIcon
            url="https://discord.wcewlug.org/join"
            style={{ height: "30px", width: "30px" }}
            bgColor="white"
          />
          <SocialIcon
            url="https://www.facebook.com/wlugclub/"
            style={{ height: "30px", width: "30px" }}
            bgColor="white"
          />
        </div>
        <p style={{ color: "gray", fontSize: "0.8rem" }} align="center">
          © 2022 WCEWLUG, ALL RIGHTS RESERVED
        </p>
      </div>
    </div>
  );
};

export default Footer;
