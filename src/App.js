import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Navbar from "./Navbar";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navbar/> 
        </header>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
