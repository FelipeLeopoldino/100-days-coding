import Navbar from './components/navbar'
import About from './pages/About'
import Home from './pages/Home'
import Profile from './pages/Profile'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
