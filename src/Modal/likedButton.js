import React, { Component } from 'react';
import { Button } from 'reactstrap';

class LikedMovie extends Component {

    constructor(props) {
        super(props);
        const movies = JSON.parse(localStorage.getItem('test'))
        const list = movies !== null ? movies : [];
        const propsMovie = this.props.affiche;
        const storedMovie = list.find(function (movie) {
            return movie.id === propsMovie.id;
        })

        const isButtonDisabled = storedMovie && storedMovie.liked;
        this.state = {
            list: list,
            isButtonDisabled: isButtonDisabled
        };
    }

    likedMovie() {
        const propsMovie = this.props.affiche;
        let newMovie = this.state.list.find(function (movie) {
            return movie.id === propsMovie.id;
        })
        let newArray
        if (newMovie) {
            const movieIndex = this.state.list.indexOf(newMovie)
            newMovie = Object.assign(newMovie, { liked: true })
            newArray = [...this.state.list]
            newArray.splice(movieIndex, 1, newMovie)
        }
        else {
            newMovie = Object.assign(propsMovie, { liked: true }, { toSee: false })
            newArray = [...this.state.list, (newMovie)]
        }
        localStorage.setItem('test', JSON.stringify(newArray));
        this.setState({
            list: newArray,
            isButtonDisabled: true
        });

    }
    render() {
        return (
            <div>
                <Button className="mb-2 btn-primary"
                    onClick={() => this.likedMovie()} disabled={this.state.isButtonDisabled}>j'aime !</Button>
            </div>
        );
    }
}
export default LikedMovie;