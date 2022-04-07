import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Music from './Music';
import Projects from './Projects';
import Gallery from './Gallery';
import Contact from './Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/music" element={ <Music /> } />
        <Route path="/projects" element={ <Projects /> } />
        <Route path="/gallery" element={ <Gallery /> } />
        <Route path="/contact" element={ <Contact /> } />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
