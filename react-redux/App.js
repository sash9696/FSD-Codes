import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, signin } from "./actions";
import "./App.css";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);

  const dispatch = useDispatch();

  return (
    <div className="app">
      <h1>Redux</h1>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment(10))}> +</button>
      <button onClick={() => dispatch(decrement())}> -</button>
      {isLogged ? <h2> Users Valuable information</h2> : ""}
      <button onClick={() => dispatch(signin())}>
        {isLogged ? "Log Out" : "Login"}
      </button>
    </div>
  );
}

export default App;
