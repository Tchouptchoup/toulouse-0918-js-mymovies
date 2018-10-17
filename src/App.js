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
<<<<<<< HEAD
          <Navbar />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/profil" component={Profil} />
          </Switch>
        </div>
=======
        <header>
          <Navbar/>

        </header>
        <h3>Bientôt à l'affiche</h3>
        <Slider url={`https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKey}&language=fr-FR&page=1`}/>
        <h3>Les plus populaires</h3>
        <Slider url={`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=fr-FR&page=1`}/>
        <h3>Les mieux notés</h3>
        <Slider url={`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKey}&language=fr-FR&page=1`}/>
>>>>>>> dev
        <footer>
          <Footer />
        </footer>
      </div >
    );
  }
}

export default App;
