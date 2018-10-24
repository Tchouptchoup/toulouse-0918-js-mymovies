import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import './Navbar.css';
import { APIKey } from './settings'
import { withRouter } from 'react-router-dom';
import Suggestions from './Suggestions';


class BarreDeRechercheMini extends Component {
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
        this.goToSearchResultsClicSuggestion()
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

    goToSearchResultsClicSuggestion = (event) => {
        if (!this.state.value) {
            return;
        }
        this.props.history.push("/recherche")
        this.fetchRecherche()
        this.setState({
            value: '',
            results: []
        })
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
            <div>
                <Form>
                    <FormGroup className="form-inline d-block d-lg-none">
                        <Label for="film-search"></Label>
                        <Input
                            style={{ width: '100%' }}
                            aria-label="Search"
                            autoComplete="off"
                            className="form-control mr-sm-2"
                            type="search"
                            name="search"
                            id="film-search"
                            placeholder="Rechercher un film"
                            onChange={this.handleChange}
                            value={this.state.value}
                        />
                        <button onClick={this.goToSearchResults} className="btn bouton-go btn-block mt-2" type="submit">GO !</button>
                    </FormGroup>
                    {this.state.value && <Suggestions results={this.state.results} value={this.state.value} action={this.handler.bind(this)} />}
                </Form>
            </div>
        )
    }
};

export default withRouter(BarreDeRechercheMini);