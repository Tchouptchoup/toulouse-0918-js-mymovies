import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import Profil from "./Profil";
import Categories from "./Categories";
import PageRecherche from './PageRecherche';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataRecherche: [],
    }
    this.receiveSearchResults = this.receiveSearchResults.bind(this)
  }

  receiveSearchResults(results) {
    this.setState({
      dataRecherche: results,
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <Navbar receiveSearchResults={this.receiveSearchResults} />
        </header>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/profil" component={Profil} />
            <Route path="/categories/:name" component={Categories} />
            <Route path="/recherche" render={props => <PageRecherche {...props} dataRecherche={this.state.dataRecherche} />} />
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
