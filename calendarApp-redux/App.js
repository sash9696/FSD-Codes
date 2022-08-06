import React from "react";
import "./App.css";
import Calendar from "./components/Calendar/Calendar";
import store from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Calendar />
      </Provider>
    </div>
  );
}

export default App;
