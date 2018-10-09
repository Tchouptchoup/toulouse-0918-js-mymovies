import React, { Component } from 'react';
import affichesData from '../affichesData.json';
import Modal from 'react-modal';

class Posters extends Component {
    constructor() {
        super();
    
        this.state = {
          modalIsOpen: false,
          
        };
    
        this.openModal = this.openModal.bind(this);
      }
    
      openModal() {
        this.setState({ modalIsOpen: true,
        });
      }
  render() {
    return (
      <ul class="p-0">
        {
          affichesData.map(function (poster) {
            if (poster.id) { // 1 ou affiche.id
              return <div class="modal-body p-0"> 
                        <img className="affiche-size mx-3" onClick={this.openModal} src={poster.image} alt={poster.title} />
                    </div>
            }
          })
        }
      </ul>
    );
  }
}

export default Posters;