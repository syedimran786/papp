import axios from 'axios'

export let HTTP=axios.create({
    baseURL:"http://localhost:4000/"
})
