import axios from 'axios';

/*
 * Base url swapi
*/
export default axios.create({
  baseURL: `https://swapi.co/api`
});