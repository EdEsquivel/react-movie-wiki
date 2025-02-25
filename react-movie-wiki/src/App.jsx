import './App.css'
import MovieCard from './components/MovieCard'

function App() {

  return (
    <>
      <MovieCard movie={{ title: 'The Shawshank Redemption', release_date: '1994', url: 'https://m.media-amazon.com/images/I/71715eBi1sL._AC_SY879_.jpg' }} />
    </>
  )
}

export default App
