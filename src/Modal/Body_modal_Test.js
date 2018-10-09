import React, { Component } from 'react';
import moviesData from './moviesData.json';

class Body_modal extends Component {
  render() {
    return (
      <ul class="p-0">
        {
          moviesData.map(function (movie) {
            if (movie.id === 3) { // 1 ou affiche.id
              return <div class="modal-body p-0">
                        <div class="embed-responsive embed-responsive-16by9 rounded">
                          <iframe class="embed-responsive-item" src={movie.trailer} allowfullscreen></iframe>
                        </div>
                      <h2 class="text-center mt-5">{movie.title}</h2>
                      <h5>Synopsis :</h5> 
                      <p class="text-justify">{movie.synopsis}</p>
                      <p>Director : {movie.director}</p>
                      <p>Release : {movie.release}</p>
                      <p>Duration : {movie.duration}</p>
                      <p>Ratings : {movie.ratings}</p> 
                    </div>
            }
          })
        }
      </ul>
    );
  }
}

export default Body_modal;