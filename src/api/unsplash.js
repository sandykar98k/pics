import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 9101a0a0dc79cd0ca896dba9e505c208089faf2e827cbb1353a4cc6102f57b89'
  }
});
