  
import axios from 'axios'

export default class Post {

    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/post`,
            withCredentials: true
        })
    }

    getAllPost = () => this.service.get('/')
    .then(response => response.data)


    getPostDetails = id => this.service.get(`/${id}`)
    .then(response => response.data)


    newMacth = Macth => this.service.post(`/newpost`, Macth)
    .then(response => response.data)

   
}