import React, { Component } from 'react'
import API from '../utils/API'
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';

export default class Search extends Component {
    state = {
        search: '',
        breeds: [],
        results: [],
        error: '',
    }

    componentDidMount() {
        API.getBaseBreedsList().then((res) => this.setState({ breeds: res.data.message }))
        .catch((err) => console.log(err));
    }

    handleInputChange = (event) => {
    this.setState({ search: event.target.value})
    }

    handleFormSubmit = (event) => {
        event.preventDefault()
        API.getDogsofBreed(this.state.search)
        .then((res) => {
            if(res.data.status === 'error') {
                throw new Error(res.data.message)
            }
            this.setState({ results: res.data.message, error: ''})
        })
        .catch((err) => this.setState({ error: err.message}))
    }

    render() {
        return (
            <div>
                <h1 className='text-center'>Search By Breed of Pup!</h1>
                <h1 style={{ opacity: this.state.error ? 1 : 0}}>
                    {this.state.error}
                </h1>
                <SearchForm
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                breeds={this.state.breeds} />
                <SearchResults results={this.state.results} />
            </div>
        )
    }
}
