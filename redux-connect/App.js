import React from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import counterReducer from "./reducers/counterReducer";
import { createStore } from "redux";

import { Provider } from "react-redux";

const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
