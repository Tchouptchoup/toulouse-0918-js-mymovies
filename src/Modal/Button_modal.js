import React from 'react';
import Modal from 'react-modal';
import moviesData from "./moviesData";

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
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
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
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Modal">
          <div class="modal-header p-0">
            <img className="affiche-size mx-3" src={moviesData.image} alt={moviesData.title} />
            <button onClick={this.closeModal} type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body p-5">
            <div class="embed-responsive embed-responsive-16by9 rounded">
              <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/GqHW3CyI7co?ecver=2" allowfullscreen></iframe>
            </div>
            <h2 ref={moviesData.title} className="text-center mt-5">Le Labyrinthe de Pan</h2>
            <img src={moviesData.poster} alt={moviesData.title}/>
            <p>Synopsis : </p>
            <p>{moviesData.synopsis}</p>
            <p>{moviesData.title}</p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">A voir !</button>
            <button type="button" class="btn btn-primary">J'aime</button>
            <button onClick={this.closeModal} type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </Modal>
      </div >
    );
  }
}

export default Modal_button;