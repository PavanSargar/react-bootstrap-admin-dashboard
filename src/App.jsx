import React, { useState } from "react";
import Header from "./components/Header";
import CanvasMenu from "./components/CanvasMenu";
import Dashboard from "./components/Dashboard";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [toggleCanvas, setToggleCanvas] = useState(true);
  const onCanvasToggle = (isToggle) => {
    setToggleCanvas(isToggle);
    console.log(isToggle)
  };
  return (
    <div className="App">
      <Header onOpenCanvas={onCanvasToggle} />
      <CanvasMenu toggleCanvas={toggleCanvas} closeHandler={onCanvasToggle} />
      <Dashboard />
    </div>
  );
}

export default App;
