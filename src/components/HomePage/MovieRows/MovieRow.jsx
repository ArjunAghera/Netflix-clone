import React, { useEffect, useState } from "react";
import "./MovieRow.css";
import axios from "../../../axios";

function MovieRow({ title, fetchUrl, isLargeRow = false }) {
  const baseImgUrl = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="movieRow">
      <h2>{title}</h2>

      <div className="rowPosters">
        {movies?.map((movie) => (
          <img
            className={`rowPoster ${isLargeRow && "rowPosterLarge"}`}
            src={`${baseImgUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieRow;
