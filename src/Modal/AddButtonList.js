import React, { Component } from 'react';
import { Button } from 'reactstrap';



class AddMovie extends Component {
    constructor(props) {
        super(props);
        const list = JSON.parse(localStorage.getItem('test'))
        this.state = {
            list: list !== null ? list : []
        };
    }
    
    addMovie() {
        let test = this.props.affiche;
        let newarray = this.state.list.concat([test])
        localStorage.setItem('test', JSON.stringify(newarray));
        this.setState({
            list: newarray
        });
    }

    render() {
        return (
            <div>
                <Button className="mb-2"
                    onClick={() => this.addMovie()}>ajouter à ma liste</Button>
            </div>
        );
    }

}
export default AddMovie;