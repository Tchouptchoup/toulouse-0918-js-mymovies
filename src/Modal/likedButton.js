import React, { Component } from 'react';
import { Button } from 'reactstrap';


 class LikedMovie extends Component {
    constructor(props) {
        super(props);
        const list = JSON.parse(localStorage.getItem('test'))
        this.state = {
            list: list !== null ? list : []
        };
    }
    
    likedMovie() {
        const test = this.props.affiche;
        const movie = Object.assign(test,{like:true, seen:false})
        let newarray = this.state.list.concat([movie])
        localStorage.setItem('test', JSON.stringify(newarray));
        this.setState({
            list: newarray
        });
    }
     render() {
        return (
            <div>
                <Button className="mb-2 btn-primary"
                    onClick={() => this.likedMovie()}>J'aime !</Button>
            </div>
        );
    }
 }
export default LikedMovie;