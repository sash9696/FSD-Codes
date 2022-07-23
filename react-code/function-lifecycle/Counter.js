import React, { useEffect, useState } from "react";

export default function Counter() {
  //top level management

  //usestate hook

  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  //passing an empty dependency array
  //componentDidMount
  //   useEffect(() => {
  //     console.log("The useEffect ran");
  //   }, []);

  //component Did Update
  //actually passing dependency in array
  //   useEffect(() => {
  //     console.log("useeffect runs after updation");
  //   }, [count, countTwo]);

  //not passing dependency array at all
  //RUN EVERYTIME

  //   useEffect(() => {
  //     console.log("useeffect ran");
  //   });

  //component will unmount
  useEffect(() => {
    console.log("component mounts");

    return () => {
      console.log("component will unmount");
    };
  }, []);

  return (
    <div>
      <h1> Count: {count} </h1>
      <h1> CountTwo: {countTwo} </h1>
      <button onClick={() => setCount(count + 1)}> Click Me!</button>
      <button onClick={() => setCountTwo(countTwo + 1)}> Click Me2!</button>
    </div>
  );
}
