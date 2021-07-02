import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Timer from "./components/Timer";

function App() {
  const [component, setComponent] = useState("timer");

  const handleClick = () => {
    setComponent(component === "timer" ? "counter" : "timer");
  };
  return (
    <div className="App">
      <h1>Counter</h1>
      {component === "counter" && <Counter defaultValue={150} step={2} />}
      {component === "timer" && <Timer />}
      <button onClick={handleClick}>
        Show {component === "counter" ? "timer" : "counter"}
      </button>
    </div>
  );
}

export default App;
