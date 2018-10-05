import React, { Component } from 'react';
import './App.css';

import Slider from "./Slider"
import Navbar from "./Navbar";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Slider />
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
