import React, { Component } from 'react';
import { Button } from 'reactstrap';


 class LikedMovie extends Component {
    constructor(props) {
        super(props);
        const list = JSON.parse(localStorage.getItem('test'))
        this.state = {
            list: list !== null ? list : [],
            isButtonDisabled: false
        };
    }
    
    likedMovie() {
        const test = this.props.affiche;
        const newtest = Object.assign(test,{liked:true},{toSee:false})
        let newarray = this.state.list.concat([newtest])
        localStorage.setItem('test', JSON.stringify(newarray));
        this.setState({
            list: newarray,
            isButtonDisabled: true
        });
    }
     render() {
        return (
            <div>
                <Button className="mb-2 btn-primary"
                    onClick={() => this.likedMovie()} disabled={this.state.isButtonDisabled}>J'aime !</Button>
            </div>
        );
    }
 }
export default LikedMovie;