import axios from 'axios';

export default axios.create({
  baseURL: 'https://today.line.me/id'
  // baseURL: 'https://monola-be.herokuapp.com/api/v1',
})