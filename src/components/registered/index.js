import React from "react";
import { Card } from "react-bootstrap";
import "./styles.css";
import { SocialIcon } from "react-social-icons";

const Registered = ({ isRegistered }) => {
  return (
    <div className="registered-container">
      <Card.Title
        style={{
          textAlign: "center",
          backgroundColor: "#ffffff10",
          backdropFilter: "blur(6px)",
          color: "white",
          WebkitBackdropFilter: "blur(6px)",
          borderRadius: "10px",
        }}
        className="registered-card"
      >
        {isRegistered ? (
          <>
            <br />
            <b style={{ fontSize: "5vh" }} className="mt-2">
              Thank You
            </b>
            <br />
            <p>You have successfully registered to Metamorphosis 2k22</p>
            <hr />
            <p>Join our Discord server for any queries and further updates! </p>
            <SocialIcon
              url="https://discord.wcewlug.org/join"
              style={{ height: "50px", width: "50px", margin: "10px auto" }}
              bgColor="white"
            />
          </>
        ) : (
          <>
            <br />
            <b style={{ fontSize: "5vh" }}>Oops!</b>
            <br />
            <p>Some error occured, try again later</p>
            <hr />
            <p>Join our Discord server for any queries and further updates! </p>
            <SocialIcon
              url="https://discord.wcewlug.org/join"
              style={{ height: "50px", width: "50px", margin: "10px auto" }}
              bgColor="white"
            />
          </>
        )}
      </Card.Title>
    </div>
  );
};

export default Registered;
