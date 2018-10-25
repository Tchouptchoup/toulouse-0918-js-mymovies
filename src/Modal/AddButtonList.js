import React, { Component } from 'react';
import { Button } from 'reactstrap';


class AddMovie extends Component {
    constructor(props) {
        super(props);
        const movies = JSON.parse(localStorage.getItem('test'))
        const list = movies !== null ? movies : [];
        const propsMovie = this.props.affiche;
        const storedMovie = list.find(function (movie){
            return movie.id === propsMovie.id;
        })
        const isButtonDisabled = storedMovie !== undefined;
        this.state = {
            list: list,
            isButtonDisabled: isButtonDisabled
        };
    }

    addMovie() {
        const test = this.props.affiche;
        let newtest = Object.assign(test, { toSee: true }, { liked: false });
        const newarray = this.state.list.concat([newtest]);
        localStorage.setItem('test', JSON.stringify(newarray));
        this.setState({
            list: newarray,
            isButtonDisabled:true

        });
    }
    render() {
        const { test } = this.state.list
        return (
            <div>
                <Button className="mb-2 btn-primary"
                    onClick={() => this.addMovie()} disabled={this.state.isButtonDisabled}>Ajouter à ma liste</Button>
                    
            </div>
        );
    }
}
export default AddMovie;