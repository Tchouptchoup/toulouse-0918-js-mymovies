import React, { Component } from 'react';
import './App.css';

import Slider from "./Slider"
import Navbar from "./Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Slider />
      </div>
    );
  }
}

export default App;
