// src/Quote.js
import React, { Component } from 'react';

class App extends Component {
const Modal = ({ title, director, trailer, release, ratings, duration, synopsis }) => (

    render() {
        const { open } = this.state;
        return (


            <div class="container">
                <div class="card">

                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src={trailer} allowfullscreen></iframe>
                    </div>
                    <div class="container">

                        <div class="card-body bg-light">
                            <h2 class="p-1">{title}</h2>
                            <p>{synopsis}</p>
                            <div class="row">
                                <div class="col-md-6">
                                    <p>Réalisateur : {director}</p>
                                    <p>Date de sortie : {release}</p>
                                </div>
                                <div class="col-md-6">
                                    <p>Durée : {duration}</p>
                                    <p>Notes : {ratings}</p>
                                </div>
                                <div class="col-md-6">
                                    <button type="button" class="btn btn-secondary">Ajouter à ma listes</button>
                                </div>
                                <div class="col-md-6">
                                    <button type="button" class="btn btn-secondary">Ajouter à mes favoris</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
)
export default Modal;