import React, { useState, useCallback } from "react";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

import "./App.css";

function App() {
  const [showP, setShowP] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("[RENDER APP]");

  const toggleP = useCallback(() => {
    if (allowToggle) {
      setShowP((prev) => !prev);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showP} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleP}>Toggle P</Button>
    </div>
  );
}

export default App;
