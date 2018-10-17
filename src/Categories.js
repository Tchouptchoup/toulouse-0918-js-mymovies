import React, { Component } from 'react';
import {APIKey} from './settings'
import Slider from "./Slider"

class Categories extends Component {
  render() {
    return (
      <div>
        <h3>Les {genre} les plus notés</h3>
        <Slider url={`https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&language=fr-FR&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=${id_genre}`}/>
        <h3>Les {genre} les plus populaires</h3>
        <Slider url={`https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id_genre}`}/>
        <h3>Les {genre} les mieux notés</h3>
        <Slider url={`https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}language=fr-FR&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&with_genres=${id_genre}`}/>
      </div>
    );
  }
}

export default Categories;
