import React, {useEffect} from "react";

const API_URL = "http://www.omdbapi.com?apikey=3f5f7a15";

const App = () => {

    const searchMovies =  async (title) =>{
        const response = await fetch (`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(()=>{
        // searchMovies("thor");
    }, [])


  return (
    <h1> Movies App using react- App.js</h1>
  );
};

export default App;
