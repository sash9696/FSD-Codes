import React, { useEffect, useState } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);
  const [calc, setCalc] = useState(0);

  //   useEffect(() => {
  //     //Run on every render
  //     setTimeout(() => {
  //       setCount(count + 1);
  //     }, 1000);
  //   });

  //   useEffect(function () {
  //     setTimeout(() => {
  //       //Run ony on firt render
  //       setCount(count + 1);
  //     }, 1000);
  //   }, []);

  //   useEffect(
  //     function () {
  //       //Run on first render
  //       //And it will also run at any time dependency changes
  //       setTimeout(() => {
  //         //Run ony on first render
  //         setCount(count + 1);
  //       }, 1000);
  //     },
  //     [calc]
  //   );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>I have rendered {count} times!</h1>
    </div>
  );
}
