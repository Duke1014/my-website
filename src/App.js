import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Music from './Music';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/music" element={ <Music /> } />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
