import React from "react";

const MyP = (props) => {
  console.log("[RENDER P]");
  return <p>{props.children}</p>;
};

export default MyP;
