import React, { Component } from "react";
import './App.css';
import SearchField from './components/SearchField.js';
//import GifCard from './components/GifCard.js';

class App extends Component {

   render() {
      return (
        <div className="App">
          <h1>GIFPY Git Search</h1>
          <SearchField/>
        </div>
      );
   }
}

export default App;
