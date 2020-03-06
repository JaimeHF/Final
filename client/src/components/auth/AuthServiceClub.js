// auth/auth-service.js
import axios from 'axios';

class AuthServiceClub {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/auth`,
      withCredentials: true
    });
  }
  


  signup = (clubname, password) => {
    return this.service.post('/clubsignup', {clubname, password})
    .then(response => response.data)
  }

  login = (clubname, password) => {
    return this.service.post('/clublogin', {clubname, password})
    .then(response => response.data)
  }

  loggedin = () => {
    return this.service.get('/currentclub',)
    .then(response => response.data)
  }

  logout = () => {
    return this.service.get('/logout',)
    .then(response => response.data)
  }
}

export default AuthServiceClub;