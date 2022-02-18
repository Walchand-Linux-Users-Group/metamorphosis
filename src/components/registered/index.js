import React from "react";
import { Card } from "react-bootstrap";
import "./styles.css";

const Registered = () => {
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
        <b style={{ fontSize: "5vw" }}>Thank You</b>
        <br />
        You have successfully registered to Metamorphosis 2k22
      </Card.Title>
    </div>
  );
};

export default Registered;
