import './App.css'
import { Routes, Route, Link } from "react-router-dom"
import Blue from "./components/blue.jsx"
import Red from "./components/red.jsx"
import Home from "./components/home.jsx"

function App() {

  return (
    <div id="container">
      <h1>React Router</h1>
      <div id="navbar">
      <Link>
        <Link className='navLink' id='homelink' to={'/home'}>Home</Link>
        <Link className='navLink' id='bluelink' to={'/blue'}>Blue</Link>
        <Link className='navLink' id='redlink' to={'/red'}>Red</Link>
        </Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App