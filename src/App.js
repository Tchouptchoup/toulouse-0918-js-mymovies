import React, { Component } from 'react';
import './App.css';
import {APIKey} from './settings'


import Slider from "./Slider"
import Navbar from "./Navbar";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navbar/>
        </header>
        <h3>Bientôt à l'affiche</h3>
        <Slider url={`https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKey}&language=fr-FR&page=4`}/>
        <h3>Les plus populaires</h3>
        <Slider url={`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=fr-FR&page=4`}/>
        <h3>Les mieux notés</h3>
        <Slider url={`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKey}&language=fr-FR&page=4`}/>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
