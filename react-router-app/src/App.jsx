
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import './App.css'

function App() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/contact" element={ <Contact /> } />
        </Routes>
        <Footer/>
      </>
  )
}

export default App
