import React, { useEffect, useState } from "react";
import "./index.css";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return <h1>Loading....</h1>;
  }

  if (tours.length === 0) {
    return (
      <div>
        <div className="title">
          <h2>No Tours Left</h2>
          <button onClick={() => fetchTours()} className="btn">
            Referesh
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
}

export default App;
