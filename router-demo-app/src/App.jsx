import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Page404 from './components/Page404';

function App() {
  const location = useLocation();
  const isKnownRoute = ['/', '/about', '/contact', '/profile'].includes(location.pathname);
  const shouldShowHeaderAndFooter = isKnownRoute;

  return (
    <>
      {shouldShowHeaderAndFooter && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      
      {shouldShowHeaderAndFooter && <Footer />}
    </>
  );
};

export default App;
