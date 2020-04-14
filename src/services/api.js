import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.12:3333',
});

export default api;

// json-server -H 192.168.1.XX file.json -p 3333
