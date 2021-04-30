import React from "react";

const Footer = () => {
  const style = {
    position: "absolute",
    color: "#f7f4e6",
    backgroundColor: "var(--secondary-color)",
    width: "100%",
    margin: "10px auto",
    bottom: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "2rem",
  };
  return (
    <div style={style}>
      <h6 style={{ marginTop: "0.3rem" }}>&copy;Smart Piggy 2021</h6>
    </div>
  );
};

export default Footer;
