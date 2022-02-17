import React from 'react';
import './App.css';
import Header from "./components/Header/Header"
import Searcher from "./components/Searcher/Searcher"


import {CardList} from "./components/CardList/CardList"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Header/>
      <Searcher/>
      <CardList/>
      <Footer/>
    </div>
  );
}

export default App;
