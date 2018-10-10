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
            <h2 className="text-center">{title}</h2>
            <p className="text-justify mt-3">{overview}</p>
            <p>Date de sortie :</p>
            <p>{test}</p>
            <div>
            <p>Notes :</p>
            <Bar affiche={this.props.affiche}/>
             </div>
             <div className="mt-3">
            <button className="btn btn-secondary mr-3">à voir !</button>
            <button className="btn btn-secondary">J'aime</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body_modal;