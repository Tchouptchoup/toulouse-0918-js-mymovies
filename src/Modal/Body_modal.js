import React, { Component } from 'react';
import Bar from '../starRatings/StarsRatings';
import AddMovie from './AddButtonList'
import LikedMovie from './likedButton'
import './Body_modal.css';
class Body_modal extends Component {
  constructor(props) {
    super(props);
    const list = JSON.parse(localStorage.getItem('test'))
    this.state = {
      idExpanded: 0
    };
  }
  readMoreReadLess(id) {
    const currentIdExpanded = this.state.idExpanded;
    if (currentIdExpanded === id) {
      this.setState({ idExpanded: 0 })
    } else {
      this.setState({ idExpanded: id })
    }
  }
  render() {
    const { id, poster_path, title, overview, release_date } = this.props.affiche;
    const test = `${release_date}`.split('-').reverse().join('-')
    
    return (

      <div className="container-fluid">
        <div className="row p-2">
          <div className="col-md-6 p-2">
            <img className="w-100 rounded" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`} alt={title} />
          </div>
          <div className="col-md-6 p-2">

            <h2 style={{color:`#bd0026`}} className="text-center">{title}</h2>
            
            <p className="mt-2 text-justify">
                      {(this.state.idExpanded === id) || (overview.length <= 280) ? overview : overview.substr(0, 280)}...
                      {overview.length > 280 &&<a 
                        onClick={() => this.readMoreReadLess(id)}
                        style={{ color: `#bd0026`, cursor:'pointer' }}>
                        {this.state.idExpanded === id  ? ' lire moins' : ' lire plus'}
                      </a>}
                    </p>

            <p>Date de sortie :</p>
            <p style={{color:`#bd0026`}} >{test}</p>

            <div>
            <p>Notes :</p>
            
            <Bar  affiche={this.props.affiche}/>
           
             </div>
             <div className="mt-3">
            <AddMovie affiche={this.props.affiche} />
            <LikedMovie affiche={this.props.affiche}>J'aime</LikedMovie>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body_modal;