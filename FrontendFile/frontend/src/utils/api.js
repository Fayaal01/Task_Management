import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api', // Change if different port
});

export default instance;
