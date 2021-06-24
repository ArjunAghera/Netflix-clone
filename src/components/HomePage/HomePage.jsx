import React from "react";
import Banner from "./Banner/Banner";
import MovieRow from "./MovieRows/MovieRow";
import Nav from "./Navbar/Nav";
import requests from "../../Requests";

function HomePage() {
  return (
    <div className="homePage">
      <Nav />
      <Banner />
      <MovieRow
        title="Netflix Orignals"
        fetchUrl={requests.fetchNetflixOrignals}
        isLargeRow
      />
      <MovieRow title="Trending Movies" fetchUrl={requests.fetchTrending} />
      <MovieRow title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <MovieRow title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <MovieRow title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <MovieRow title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <MovieRow title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomePage;
