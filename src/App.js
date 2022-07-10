import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import AboutUs from './pages/AboutUs/AboutUs'
import Civitas from './pages/Civitas'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/civitas" element={<Civitas />} />
      </Routes>
    </div>
  );
}

export default App;
