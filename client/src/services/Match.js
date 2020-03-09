  
import axios from 'axios'

export default class Match {

    constructor() {
        this.match = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/match`,
            withCredentials: true
        })
    }

    getAllMatch = () => this.match.get('/')
    .then(response => response.data)


    getMatchDetails = id => this.match.get(`/${id}`)
    .then(response => {
        return response.data
    })


    newMatch = (macthname, price, location, date, time, type) =>{
        return this.match.post(`/newmacth`, {macthname, price, location, date, time, type})
        .then(response => {
            console.log(response)
            return response.data
        })}
    

   
}