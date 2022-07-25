import React, { useEffect, useState } from "react";
import "./App.css";
import { useFetchData } from "./useFetchData";

function App() {
  const [dogData] = useFetchData("https://dog.ceo/api/breeds/image/random");
  const [otherData] = useFetchData("https://api.zippopotam.us/us/33162");

  // const [dogData, setDogData] = useState(null);
  // const [otherData, setOtherData] = useState(null);

  // useEffect(() => {
  //   fetch("https://dog.ceo/api/breeds/image/random")
  //     .then((response) => response.json())
  //     .then((data) => setDogData(data.message));
  // }, []);
  // useEffect(() => {
  //   fetch("https://api.zippopotam.us/us/33162")
  //     .then((response) => response.json())
  //     .then((data) => setOtherData(data));
  // }, []);

  return (
    <div className="app">
      <h1>Custom Hooks</h1>
      <img height="200" width="200" src={dogData?.message} alt="dogImage" />
      <h4>{otherData?.country} </h4>
    </div>
  );
}

export default App;
