import React, { Component } from 'react';
import './App.css';
import Slider from "./Slider";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Modal_button from "./Modal/Button_modal";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        <div className=" container-fluid p-5">
          <Navbar />
          </div>
        </header>
        <div className=" container-fluid p-5">
        <Slider />
        </div>
        <div className="container text-center p-5">
        <Modal_button />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
export default App;
