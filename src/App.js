import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from "./Navbar";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
