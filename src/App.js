import React from 'react';
import './App.css';
import Header from "./components/Header/Header"
import {CardList} from "./components/CardList/CardList"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Header/>
      <CardList/>
      <Footer/>
    </div>
  );
}

export default App;
