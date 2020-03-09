import axios from 'axios'

export default class Player {

    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/user`,
            withCredentials: true
        })
    }

    getAllPlayer = () => this.service.get('/')
        .then(response => response.data)


    getPlayerDetails = id => this.service.get(`/${id}`)
        .then(response => {
            return response.data
        })

}