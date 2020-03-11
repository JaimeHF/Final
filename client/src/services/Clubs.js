import axios from 'axios'

export default class Club {

    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/user`,
            withCredentials: true
        })
    }

    getAllClub = () => this.service.get('/')
        .then(response => response.data)


    getClubDetails = id => this.service.get(`/${id}`)
            
        .then(response => {
            return response.data
        })


}