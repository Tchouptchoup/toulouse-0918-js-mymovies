import React, { Component } from 'react';
import './Navbar.css';

class Suggestions extends Component {
    constructor (props){
        super (props)
        this.state = {
            choice : ''
        }
    }

    clicChoice = () => {
        this.setState({
            choice: this.title
        })
        this.props.action(this.state.choice)
    }
    render() {
        const options = this.props.results && this.props.results.slice(0, 5).map(r => (
            <li
                key={r.id}
                title={r.title}
                style={{ cursor: 'pointer' }}
                onClick={this.clicChoice}
            >
                {r.title}
            </li>))
        return (
            <ul className="suggestions">{options}</ul>
        )
    }
}

export default Suggestions;