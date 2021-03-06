import React from "react";
import "./Backdrop.css";

const Backdrop = (props) => {
  const classes = ["Backdrop", props.show ? "BackdropOpen" : "BackdropClosed"];
  return <div className={classes.join(" ")} />;
};

export default Backdrop;
