import React, { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";

import MovieCard from "./components/MovieCard";

// This app uses omdbapi to show the data
// paste your api key in place of "PUSHKAR" to see results
// get your api key from -> https://omdbapi.com/apikey.aspx
const API_URL = "http://www.omdbapi.com?apikey=PUSHKAR";

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {

    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
    // console.log(data);
  };

  useEffect(() => {
    searchMovies("thor");
  }, []);

  return (
    <div className="app">

      <h1>Movies App</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <img src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0
        ? (
            <div className="container">
               {
                movies.map((movie)=>(
                    <MovieCard movie={movie} key={movie.imdbID} />
                ))
               }
            </div>
        ) : (
            <div className="empty">
                <h2>No Movies found</h2>
            </div>
        )}

    </div>
  );
};

export default App;
