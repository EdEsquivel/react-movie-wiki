import React, { useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";

function Home() {
    const [searchQuery, setSearchQuery] = useState("")

  const movies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      release_date: "1994",
      url: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    },
    {
      id: 2,
      title: "The Godfather",
      release_date: "1972",
      url: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    },
    {
      id: 3,
      title: "The Dark Knight",
      release_date: "2008",
      url: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for "${searchQuery}"`);
    setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search movies"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
