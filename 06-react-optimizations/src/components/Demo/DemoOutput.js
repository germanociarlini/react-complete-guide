import React from "react";
import MyP from "./MyP";

const DemoOutput = (props) => {
  console.log("[RENDER DEMO]");
  return <MyP>{props.show ? "Showing P!" : ""}</MyP>;
};

export default React.memo(DemoOutput);
