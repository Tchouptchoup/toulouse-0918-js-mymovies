import React, {Component} from "react";
import './Affiche.css';
import './Modal/modalTest.css';
import Modal from "react-responsive-modal";
import Body_modal from "./Modal/Body_modal";
import './Modal/mod.css';



class Affiche extends Component {
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
    const { poster_path, title } = this.props.affiche;
      const { open } = this.state;
      return (
          
        <div className="inline rounded">
          <img onClick={this.onOpenModal} className="affiche-size mx-3" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`} alt={title}></img>
          <Modal className="Test" open={open} onClose={this.onCloseModal} center>
            <Body_modal affiche={this.props.affiche}/>
          </Modal>
          </div>
          
      );
    }
  }


export default Affiche;
