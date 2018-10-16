import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import Profil from "./Profil";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/profil" component={Profil} />
          </Switch>
        </div>
        <footer>
          <Footer />
        </footer>
      </div >
    );
  }
}

export default App;
