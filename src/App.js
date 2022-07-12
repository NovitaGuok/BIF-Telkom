import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/FooterOne'
import AboutUs from './pages/AboutUs/AboutUs'
import Civitas from './pages/Civitas/Civitas'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/civitas" element={<Civitas />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
