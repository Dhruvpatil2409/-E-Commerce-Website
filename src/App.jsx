import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'shop':
        return <Shop />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div style={{ fontFamily: '"Helvetica Neue", Arial, sans-serif', color: '#1a1a1a', backgroundColor: '#fff' }}>
      {/* Capturing header navigational clicks to trigger structural route changes */}
      <div onClick={(e) => {
        const targetText = e.target.innerText?.toLowerCase();
        if (targetText === 'home') setCurrentPage('home');
        if (targetText === 'shop') setCurrentPage('shop');
        if (targetText === 'our story') setCurrentPage('about');
        if (targetText === 'contact') setCurrentPage('contact');
      }}>
        <Navbar />
      </div>

      <main>
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
}