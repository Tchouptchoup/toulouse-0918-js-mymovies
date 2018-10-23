import React, { Component } from 'react';
import { Button } from 'reactstrap';
 class LikedButtonProfil extends Component {
    constructor(props) {
        super(props);
        const list = JSON.parse(localStorage.getItem('test'))
        this.state = {
            list: list !== null ? list : []
        };
    }
    likedArray() {
        const list = [...this.state.list];
        const newList = list.filter(test => test.liked === false);
        this.setState({ list: newList });
      }
     render() {
         const {test} = this.state.list
        return (
            <div>
                <Button className="mb-2 btn-primary"
                    onClick={() => this.likedArray()}>Films ajoutés à ma liste</Button>
            </div>
        );
    }
 }
export default LikedButtonProfil;