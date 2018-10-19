import React, { Component } from 'react';
import { Button } from 'reactstrap';
import '../Profil.css';

 class RemoveMovie extends Component {
    constructor(props) {
        super(props);
        const list = JSON.parse(localStorage.getItem('test'))
        this.state = {
            list: list !== null ? list : []
        };
    }
    
    deleteMovie(id) {
        const list = [...this.state.list];
        const newList = list.filter(test => test.id !== id);
        this.setState({ list: newList });
      }

     render() {
        return (
            <div>
                <Button block className="mb-2 p-1 btn-primary"
                    onClick={() => this.deleteMovie(test.id)}>Supprimer de ma liste</Button>
            </div>
        );
    }
 }
export default RemoveMovie;