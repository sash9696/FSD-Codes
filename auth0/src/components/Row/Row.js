import React, { useState, useEffect } from "react";

import "./Row.css";

const API_KEY = "3653c65d49aec32d55c3b5dd49c7b021";
const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, isLargeRow = false }) {
  const [movie, setMovie] = useState([]);

  //Assignment create a custome hook to limit api calls
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    // const response = await fetch(`${BASE_URL} ${API_KEY}&language=en-US `);
    const response = await fetch(
      ` https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
    );
    const request = await response.json();

    setMovie(request.results);
  }
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters_container">
        {movie?.map((movie) =>
          movie?.poster_path && movie?.backdrop_path ? (
            <img
              className={`row_small  ${isLargeRow && "row_large"}`}
              key={movie.id}
              src={`${base_url}${
                isLargeRow ? movie?.poster_path : movie?.backdrop_path
              }`}
              alt={movie?.title}
            />
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
}

export default Row;
