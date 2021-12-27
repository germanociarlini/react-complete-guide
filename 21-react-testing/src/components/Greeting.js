import React, { useState } from "react";
import Output from "./Output";

export default function Greeting() {
  const [isClicked, setIsClicked] = useState(false);

  const onClickHandler = () => {
    setIsClicked(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!isClicked && <Output>Yote</Output>}
      {isClicked && <Output>Yeet</Output>}
      <button onClick={onClickHandler}>Click me!</button>
    </div>
  );
}
