import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "../../../axios";
import requests from "../../../Requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOrignals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="bannerContent">
        <div className="bannerTitle">
          <h1>{movie?.title || movie?.name || movie?.ovierview_name}</h1>
        </div>
        <div className="bannerButtons">
          <button className="bannerBtn">Play</button>
          <button className="bannerBtn">My List</button>
        </div>
        <div className="bannerDescription">
          <p>{truncate(movie?.overview, 150)}</p>
        </div>
      </div>
      <div className="banner-fadeBottom" />
    </header>
  );
}

export default Banner;
