import React, { Component } from 'react';
import './App.css';
import Modal from './ListFilms.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="container-fluid">
          <Modal
          />
        </div>
      </div>
    );
  }
}

export default App;
