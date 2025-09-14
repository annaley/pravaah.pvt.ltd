import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Certifications from './pages/Certifications';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/*" element={<Products />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/case-studies" element={<div className="py-16 text-center">Case Studies - Coming Soon</div>} />
            <Route path="/investors" element={<div className="py-16 text-center">Investor Relations - Coming Soon</div>} />
            <Route path="/careers" element={<div className="py-16 text-center">Careers - Coming Soon</div>} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;