import React, { Component } from 'react'
import API from '../utils/API'
import Card from '../components/Card'

export default class Discover extends Component {
    state ={
        image: '',
        match: false,
        matchCount: 0
    }

    componentDidMount() {
        this.loadNextDog()
    }

    loadNextDog = () => {
        API.getRandomDog()
        .then((res) =>
        this.setState({
            image: res.data.message,
        }))
        .catch((err) => console.log(err))
    }

    handleBtnClick = (event) => {
        const btnType = event.target.attributes.getNamedItem('data-value').value;

        const newState = { ...this.state}

        if (btnType === 'pick') {
            newState.match = Math.floor(Math.random() * 2) +1 === 1

            newState.matchCount = newState.match ? newState.matchCount +1 : newState.matchCount
        } else {
            newState.match = false
        }
        this.setState(newState)
        this.loadNextDog()
    }

    render() {
        return (
            <div>
                <h1 className='text-center'>Discover new friends!</h1>
                <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
                <h1 className='text-center'>We have {this.state.matchCount} friends</h1>
            </div>
        )
    }
}
