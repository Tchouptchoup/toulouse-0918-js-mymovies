import React from 'react';
import Modal from 'react-modal';
import moviesData from "./moviesData";
import Body_modal from "./Body_modal";
import Posters from "./Poster_test"



const customStyles = {
  content: {
    top: '10%',
    bottom: 'auto',
    height: '80%', 
    overlfow: 'scroll',
  }
};
class Modal_button extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true,
    });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (

      <div>
        <button onClick={this.openModal}>Images</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Modal">
          
          <div class="modal-header mb-3">
            <button onClick={this.closeModal} type="button" class="close bg-ligth" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="m-0">
          <Body_modal/> 
          </div>
          <div class="modal-footer">
            <button type="button" className="btn btn-primary">A voir !</button>
            <button type="button" className="btn btn-primary">J'aime</button>
            <button onClick={this.closeModal} type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </Modal>
      </div>
    )
  }
}

export default Modal_button;