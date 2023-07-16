import React, { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";

import MovieCard from "./components/MovieCard";

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {

    const response = await fetch(`${process.env.REACT_APP_API_URL}&s=${title}`);

    const data = await response.json();

    setMovies(data.Search);
    // console.log(data);
  };

  useEffect(() => {
    searchMovies("thor");
  }, []);

  return (
    <div className="app">

<h1 className="anurati">Movies And Series</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {if (e.key === "Enter"){searchMovies(searchTerm)}}}
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
