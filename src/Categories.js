import React, { Component } from 'react';
import {APIKey} from './settings'
import Slider from "./Slider"
import './Categories.css'

import dataGenres from "./dataGenres"

class Categories extends Component {
    constructor (props){
        super (props);
        this.state = {
            genreName : props.match.params.name
        }
    }

  static getDerivedStateFromProps(nextProps, prevState){
      if (nextProps.match.params.name !== prevState.genreName){
          return {
              genreName : nextProps.match.params.name
          }
      }
      return null
  }
    
//   componentDidUpdate(){
//       const newGenreName = this.props.match.params.name
//       if (newGenreName !== this.state.genreName){
//           this.setState({genreName : newGenreName})
//       }
//   }

  render() {
      const name = this.state.genreName
      const genre = dataGenres.find(genre => genre.name === name)
    return (
      <div>
        <h3><span className="film-genre">{genre.name}</span> : les plus vus</h3>
        <Slider url={`https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&language=fr-FR&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=${genre.id}`}/>
        <h3><span className="film-genre">{genre.name}</span> : les plus populaires</h3>
        <Slider url={`https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre.id}`}/>
        <h3><span className="film-genre">{genre.name}</span> : les mieux notés</h3>
        <Slider url={`https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&language=fr-FR&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&with_genres=${genre.id}`}/>
      </div>
    );
  }
}

export default Categories;
