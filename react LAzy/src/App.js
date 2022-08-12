import React, { lazy, Suspense } from "react";
import "./App.css";
// import OtherComponent from "./OtherComponent";

// const OtherComponent = React.lazy(() => import("./OtherComponent"));

const OtherComponent = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./OtherComponent")), 2000);
  });
});

const AnotherComponent = lazy(() => import("./AnotherComponent"));

function App() {
  return (
    <div>
      <h1>Hi Everyone</h1>
      <Suspense
        fallback={
          <div>
            <h1>Loading....</h1>
          </div>
        }
      >
        <OtherComponent />
        <AnotherComponent />
      </Suspense>
    </div>
  );
}

export default App;
