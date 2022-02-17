import React from 'react';
import './App.css';
import Header from "./components/Header/Header"
import Searcher from "./components/Searcher/Searcher"


import {CardList} from "./components/CardList/CardList"
function App() {
  return (
    <div className="App">
      <Header/>
      <Searcher/>
      <CardList/>
    </div>
  );
}

export default App;
