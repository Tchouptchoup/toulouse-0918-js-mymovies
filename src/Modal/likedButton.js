import React, { Component } from 'react';
import { Button } from 'reactstrap';


 class LikedMovie extends Component {
    constructor(props) {
        super(props);
        const list = JSON.parse(localStorage.getItem('test'))
        this.state = {
            item:"like",
            list: list !== null ? list : []
        };
    }
    
    likedMovie() {
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
                    onClick={() => this.likedMovie()}>J'aime !</Button>
            </div>
        );
    }
 }
export default LikedMovie;