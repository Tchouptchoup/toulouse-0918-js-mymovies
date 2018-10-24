import React, { Component } from 'react';
import './Navbar.css';

class Suggestions extends Component {
    clicChoice = (event) => {
        this.props.action(event.target.innerText)
    }
    render() {
        const options = this.props.results && this.props.results.slice(0, 5).map(r => (
            <li
                className="suggestions-liste"
                key={r.id}
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