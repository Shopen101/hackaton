import axios from 'axios'

export const api = axios.create({
    baseUrl: 'http://localhost:3000'
})

// baseUrl: 'https://js-cloud-network.herokuapp.com',
// "proxy": "http://localhost:5000/",
