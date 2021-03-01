import axios from 'axios';
import { REACT_APP_RECIPE_PUPPY_API_KEY } from '@env';

export default axios.create({
  baseURL: 'https://recipe-puppy.p.rapidapi.com/',
  headers: {
    'content-type': 'application/octet-stream',
    'x-rapidapi-host': 'recipe-puppy.p.rapidapi.com',
    'x-rapidapi-key': REACT_APP_RECIPE_PUPPY_API_KEY,
    useQueryString: true,
  },
});
