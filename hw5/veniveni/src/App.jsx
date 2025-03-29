import { useState } from 'react';
import APIForm from '../Components/APIForm';
import './App.css';

function App() {
  const [currentTitle, setCurrentTitle] = useState(null);
  const [currentOverview, setCurrentOverview] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentLanguage, setCurrentLanguage] = useState(null);
  const [currentReleaseDate, setCurrentReleaseDate] = useState(null);
  const [currentPopularity, setCurrentPopularity] = useState(null);

  const [bannedTags, setBannedTags] = useState([]);  // Stores banned values
  const [seenMovies, setSeenMovies] = useState([]);  // Stores already seen movies

  const banTag = (tag) => {
    if (!bannedTags.includes(tag)) {
      setBannedTags([...bannedTags, tag]);
    }
  };

  const unbanTag = (tag) => {
    setBannedTags(bannedTags.filter((banned) => banned !== tag));
  };

  const submitForm = () => {
    makeQuery();
  };

  const makeQuery = async () => {
    let query = "https://api.themoviedb.org/3/movie/popular?api_key=b1446bbf3b4c705c6d35e7c67f59c413&language=en-US&page=1";

    try {
      const response = await fetch(query);
      const json = await response.json();
      console.log(json);

      if (json.results.length === 0) {
        alert("No movies found.");
        return;
      }

      // Filter out movies based on banned attributes
      let filteredMovies = json.results.filter(
        (movie) =>
          !bannedTags.includes(movie.original_language) &&
          !bannedTags.includes(movie.release_date?.substring(0, 4)) &&
          !bannedTags.includes(movie.popularity ? Math.round(movie.popularity / 100) * 100 : "")
      );

      if (filteredMovies.length === 0) {
        alert("No movies available due to bans. Please unban some tags.");
        return;
      }

      // Pick a random movie
      const movie = filteredMovies[Math.floor(Math.random() * filteredMovies.length)];

      // Store the seen movie
      setSeenMovies([...seenMovies, movie.title]);

      // Set states with movie details
      setCurrentTitle(movie.title);
      setCurrentOverview(movie.overview);
      setCurrentImage(movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null);
      setCurrentLanguage(movie.original_language);
      setCurrentReleaseDate(movie.release_date);
      setCurrentPopularity(movie.popularity ? Math.round(movie.popularity / 100) * 100 : "");
      
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  return (
    <div className='homepage'>
      <div className='centerPage'>
        <h1> Knock-Off Netflix </h1>
        <button type="button" className="button" onClick={submitForm}>
          Find A Movie to Watch! 🎞 
        </button> 
        <h2> {currentTitle} </h2>
        <h4> Overview: {currentOverview} </h4>

        <button type="button" className="button" onClick={() => banTag(currentLanguage)}> 
          Language: {currentLanguage}
        </button>
      
        <button type="button" className="button" onClick={() => banTag(currentReleaseDate?.substring(0, 4))}> 
          Release Date: {currentReleaseDate ? currentReleaseDate.substring(0, 4) : ""}
        </button>

        <button type="button" className="button" onClick={() => banTag(currentPopularity)}> 
          Popularity: {currentPopularity}
        </button>
        <br></br>

        {currentImage ? (
          <img className="moviePoster" src={currentImage} alt="Movie Poster" />
        ) : null}
      </div>

      <div className='sidePage'>
        <h2>Banned Tags</h2>
        {bannedTags.map((tag, index) => (
          <button key={index} type="button" className="bannedButtons" onClick={() => unbanTag(tag)}> 
            {tag} ❌
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
