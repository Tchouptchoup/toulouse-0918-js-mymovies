import React, { Component } from 'react';
import Bar from '../starRatings/StarsRatings';


class Body_modal extends Component {

  render() {
    const { poster_path, title, overview, release_date } = this.props.affiche;
    const test = `${release_date}`.split('-').reverse().join('-');
   
    return (

      <div className="container-fluid">
        <div className="row p-2">
          <div className="col-md-6 p-2">
            <img className="w-100 rounded" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`} alt={title} />
          </div>
          <div className="col-md-6 p-2">
            <h2 style={{color:`#bd0026`}}className="text-center">{title}</h2>
            <p className="text-justify">{overview}</p>
            <p>Date de sortie : <span style={{color:`#bd0026`}}>{test}</span></p>
            <div>
            <p>Notes :</p>
            <Bar affiche={this.props.affiche}/>
             </div>
             <div className="mt-3">
            <button className="btn btn-secondary mr-3">à voir !</button>
            <button className="btn btn-secondary">J'aime</button>
            <p style={{color:`#bd0026`}} className="mt-3">Ce film est déjà dans votre liste de favoris</p>
            <p style={{color:`#bd0026`}} className="mt-3">Vous venez d'ajouter ce film dans votre liste de films à voir</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body_modal;