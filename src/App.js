import React, { Component } from 'react';
import './App.css';

import Slider from "./Slider";
import Navbar from "./Navbar";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Slider />
        <Popover />
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
export default App;
