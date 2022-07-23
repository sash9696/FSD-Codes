import React, { useState } from "react";
import "./App.css";

function Bulbs() {
  const [on, setOn] = useState(false);
  const [count, setCount] = useState(1);

  console.log(count);
  // const lightSwitch = () => setOn(!on);
  const lightSwitch = () => setOn((on) => !on);
  const addBulbs = () => setCount((count) => count + 1);

  const bulb = <div className={on ? "bulb-on" : "bulb-off"}></div>;

  const bulbs = Array(count).fill(bulb);
  console.log(bulbs);

  return (
    <div>
      <div className="bulbs">{bulbs}</div>
      <button onClick={lightSwitch}>On/Off</button>
      <button onClick={addBulbs}>Add bulb</button>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Bulbs />
    </div>
  );
}

export default App;
