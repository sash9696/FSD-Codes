import Counter from "./Counter";
import "./App.css";
import { useState } from "react";
function App() {
  const [showCounter, setShowCounter] = useState(false);

  return (
    <div className="app">
      <h1>My App</h1>
      <button onClick={() => setShowCounter(!showCounter)}>
        {showCounter ? "Hide Counter App" : "Show Counter App"}
      </button>

      {showCounter && <Counter />}
    </div>
  );
}

export default App;
