import React, { Component } from 'react';
import { Button } from 'reactstrap';


class AddMovie extends Component {
    constructor(props) {
        super(props);
        const movies = JSON.parse(localStorage.getItem('test'))
        const list = movies !== null ? movies : [];
        const propsMovie = this.props.affiche;
        const storedMovie = list.find(function (movie) {
            return movie.id === propsMovie.id;
        })
        const isButtonDisabled = storedMovie && storedMovie.toSee;
        this.state = {
            list: list,
            isButtonDisabled: isButtonDisabled
        };
    }

    addMovie() {
        const propsMovie = this.props.affiche;
        let newMovie = this.state.list.find(function (movie) {
            return movie.id === propsMovie.id;
        })
        let newArray
        if (newMovie) {
            const movieIndex = this.state.list.indexOf(newMovie)
            newMovie = Object.assign(newMovie, { toSee: true })
            newArray = [...this.state.list]
            newArray.splice(movieIndex, 1, newMovie)
        }
        else {
            newMovie = Object.assign(propsMovie, { toSee: true }, { liked: false })
            newArray = [...this.state.list, (newMovie)]
        }
        localStorage.setItem('test', JSON.stringify(newArray));
        this.setState({
            list: newArray,
            isButtonDisabled: true
        });

    }
    render() {
        const { test } = this.state.list
        return (
            <div>
                <Button className="mb-2 btn-primary"
                    onClick={() => this.addMovie()} disabled={this.state.isButtonDisabled}>à voir !</Button>
                    
            </div>
        );
    }
}
export default AddMovie;