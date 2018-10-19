import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import Profil from "./Profil";
import Categories from "./Categories";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/profil" component={Profil} />
            <Route path="/categories/:name" component={Categories} />
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
