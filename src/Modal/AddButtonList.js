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
        const test = this.props.affiche;
        let newtest = Object.assign(test, {toSee:true},{liked:false});
        const newarray = this.state.list.concat([newtest]);
        localStorage.setItem('test', JSON.stringify(newarray));
        this.setState({
            list: newarray
        });
    }
     render() {
         const {test} = this.state.list
        return (
            <div>
                <Button className="mb-2 btn-primary"
                    onClick={() => this.addMovie()}>Ajouter à ma liste</Button>
            </div>
        );
    }
 }
export default AddMovie;