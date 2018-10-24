import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import './Navbar.css';
import { APIKey } from './settings'
import { withRouter } from 'react-router-dom';
import Suggestions from './Suggestions';


class BarreDeRecherche extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            results: [],
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handler = (title) => {
        this.setState({
            results: [],
            value: title
        });
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&language=fr-FR&query=${this.state.value}&page=1&include_adult=false`)
            .then(results => results.json())
            .then(data => {
                this.setState({
                    results: data.results
                })
            });
    }

    fetchRecherche = () => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&language=fr-FR&query=${this.state.value}&page=1&include_adult=false`)
            .then(results => results.json())
            .then(data => {
                this.props.action(data.results)
            });
    }

    goToSearchResults = (event) => {
        if (!this.state.value) {
            return;
        }
        this.props.history.push("/recherche")
        this.fetchRecherche()
        event.preventDefault()
        this.setState({
            value: '',
            results: []
        })
    }

    render() {
        return (
            <div className="d-flex flex-row">
                <Form>
                    <FormGroup className="form-inline ml-3 d-none d-lg-block">
                        <Label for="film-search"></Label>
                        <Input
                            autoComplete="off"
                            className="form-control mr-sm-2"
                            style={{ width: '450px' }}
                            type="search"
                            name="search"
                            id="film-search"
                            placeholder="Rechercher un film"
                            onChange={this.handleChange}
                            value={this.state.value}
                        />
                        <button onClick={this.goToSearchResults} className="btn bouton-go mx-2" type="submit">GO !</button>
                    </FormGroup>
                    {this.state.value && <Suggestions results={this.state.results} value={this.state.value} action={this.handler.bind(this)} />}
                </Form>
            </div>
        )
    }
};

export default withRouter(BarreDeRecherche);