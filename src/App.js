import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from "./Pages/LandingPage/LandingPage"
import {Detail} from "./Pages/Detail/Detail"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/Detail/:id" element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
