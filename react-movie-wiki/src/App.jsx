import { Route, Routes } from 'react-router-dom'
import './css/App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Favorites from './pages/Favorites'

function App() {

  return (
    <>
      <div>
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/favorites' element={<Favorites />}/>
          </Routes>
        </main>
      </div>          
    </>
  )
}

export default App
