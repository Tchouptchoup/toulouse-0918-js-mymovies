import React, { Component } from 'react';
import {APIKey} from './settings'
import Slider from "./Slider"

class Home extends Component {
  render() {
    return (
      <div>
        <h3>Bientôt à l&apos;affiche</h3>
        <Slider url={`https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKey}&language=fr-FR&page=1`}/>
        <h3>Les plus populaires</h3>
        <Slider url={`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=fr-FR&page=1`}/>
        <h3>Les mieux notés</h3>
        <Slider url={`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKey}&language=fr-FR&page=1`}/>
      </div>
    );
  }
}

export default Home;
