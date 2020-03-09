  
import axios from 'axios'

export default class Match {

    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/match`,
            withCredentials: true
        })
    }

    getAllMatch = () => this.service.get('/')
    .then(response => response.data)


    getMatchDetails = id => this.service.get(`/${id}`)
    .then(response => {
        return response.data
    })


    newMatch = Macth => this.service.post(`/newmatch`, Macth)
    .then(response => response.data)

   
}