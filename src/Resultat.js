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
        const { poster_path, title, vote_average } = this.props.recherche;

        const { open } = this.state;
        return (

            <div className="resultats-recherche">
                <img className="image-recherche" alt={title} src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`} />
                <Modal className="Test" open={open} onClose={this.onCloseModal} center>
                </Modal>
            </div>
        )
    }
}
export default Resultat;