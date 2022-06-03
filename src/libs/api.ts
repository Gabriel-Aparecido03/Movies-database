import axios from 'axios'

export const api = axios.create({
    baseURL:'ttps://api.themoviedb.org'
})