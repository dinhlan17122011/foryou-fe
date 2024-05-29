import axios from 'axios'

const reqs = axios.create({
    baseURL:'http://localhost:3000/'
})



export default reqs