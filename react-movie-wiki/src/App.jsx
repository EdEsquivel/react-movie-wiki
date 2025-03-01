import { Route, Routes } from 'react-router-dom'
import { MovieProvider } from './contexts/MovieContext'
import './css/App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Favorites from './pages/Favorites'

function App() {

  return (
    <>
      <MovieProvider>
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/favorites' element={<Favorites />}/>
          </Routes>
        </main>
      </MovieProvider>          
    </>
  )
}

export default App
