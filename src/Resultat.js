import React, { Component } from "react";
import './Navbar.css'
import './Modal/modalTest.css';
import Modal from "react-responsive-modal";
import Body_modal from "./Modal/Body_modal";
import './Modal/mod.css';

class Resultat extends Component {
    state = {
        open: false
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div className="resultats-recherche inline rounded">
                <img onClick={this.onOpenModal} style={{cursor: 'pointer'}} className="image-recherche" alt={this.props.title} src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${this.props.poster_path}`} />
                <Modal className="Test" open={this.state.open} onClose={this.onCloseModal} center>
                    <Body_modal affiche={this.props.dataRecherche} />
                </Modal>
            </div>

        );
    }
}

export default Resultat;