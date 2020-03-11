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
          .then(response => {
              return response.data
          })


      newPost = (title, description, location, club_id) => this.service.post(`/newpost`, {title, description, location, club_id})
          .then(response => {
                return response.data
    })


  }