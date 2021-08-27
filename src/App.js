import React from 'react';
import { Routes, Route } from "react-router-dom";
import './css/index.css';
import AboutUs from './components/About';
import HomeComponent from './components/Home';
import Animation from './components/Animation';
import WebDesign from './components/Web';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeComponent/>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/animation" element={<Animation />} />
        <Route path="/web" element={<WebDesign />} />
      </Routes>
    </div>
  );
}

export default App;
