import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Payments from './components/Payments';
import OrderPlacedMessage from './components/Orderplacedmessage';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: 'calc(100vh - 120px)' }}> {/* Adjust minHeight based on your footer/navbar height */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payment" element={<Payments />} />
          <Route path="/order-placed" element={<OrderPlacedMessage />} />
          {/* Add routes for About Us, Categories, etc., if you want full pages */}
          <Route path="/about" element={<h2 className="text-center mt-5">About Us Page</h2>} />
          <Route path="/category/:name" element={<h2 className="text-center mt-5">Category Page</h2>} />
          <Route path="/services" element={<h2 className="text-center mt-5">Our Services Page</h2>} />
          <Route path="/privacy" element={<h2 className="text-center mt-5">Privacy Policy Page</h2>} />
          <Route path="/affiliates" element={<h2 className="text-center mt-5">Affiliated Program Page</h2>} />
          <Route path="/faqs" element={<h2 className="text-center mt-5">FAQs Page</h2>} />
          <Route path="/shipping" element={<h2 className="text-center mt-5">Shipping Page</h2>} />
          <Route path="/returns" element={<h2 className="text-center mt-5">Returns Page</h2>} />
          <Route path="/order-status" element={<h2 className="text-center mt-5">Order Status Page</h2>} />
          <Route path="/payment-options" element={<h2 className="text-center mt-5">Payment Options Page</h2>} />
          <Route path="/shop/:type" element={<h2 className="text-center mt-5">Shop by type Page</h2>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;