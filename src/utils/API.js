/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

export default {
    getRandomDog() {
        return axios.get('https://dog.ceo/api/breeds/image/random')
    },
    getDogsofBreed(breed) {
        return axios.get(`https://dog.ceo/api/breed/${breed}/images`)
    },
    getBaseBreedsList() {
        return axios.get('https://dog.ceo/api/breeds/list')
    },
};