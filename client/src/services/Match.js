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


    newMatch = (macthname, price, date, time, type,userCreate_id,user_id) =>{
        return this.match.post(`/newmacth`, {macthname, price, date, time, type,userCreate_id,user_id})
        .then(response => {
            return response.data
        })}


    addOne = (id) =>{
            return this.match.put(`/editmacth/${id}`, {id})
            .then(response => {
                console.log(response)
                return response.data
            })}
    


    

   
}