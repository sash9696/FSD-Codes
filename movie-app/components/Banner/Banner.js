import React, { useState, useEffect } from "react";
import "./Banner.css";

const BASE_URL = "https://api.themoviedb.org/3/trending/all/week?api_key=";

const API_KEY = "3653c65d49aec32d55c3b5dd49c7b021";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    // const response = await fetch(`${BASE_URL} ${API_KEY}&language=en-US `);
    const response = await fetch(
      ` https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
    );
    const request = await response.json();

    setMovie(
      request.results[Math.floor(Math.random() * request.results.length - 1)]
    );
  }

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <div
      className="banner"
      style={{
        backgroundImage: movie?.backdrop_path
          ? `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`
          : "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-rGFlY8UQDdskCZW3D6WGmPAIQlKf0id6da3f6jZbqrSTwARHwsEj2RXyCr5h8I3TiKA&usqp=CAU')",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner_contents">
        <h1>{movie?.original_title || movie?.title}</h1>

        <div className="banner_buttons">
          <button>Play</button>
          <button>My List</button>
        </div>
        <h3>{truncate(movie?.overview, 80)}</h3>
      </div>
    </div>
  );
}

export default Banner;
