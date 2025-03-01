import React from 'react'
import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'
import '../css/Favorites.css'

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className='favorites'>
        <h2>Your Favorite Movies</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>      
    )
  }
  return (
    <div className='favorites-empty'>
        <h2>No Favorite Movies Yet</h2>
        <p>Start adding movies to your favorites and they will appear here</p>
    </div>
  )
}

export default Favorites