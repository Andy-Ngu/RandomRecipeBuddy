import axios from 'axios';

export default axios.create({
  baseURL: 'https://recipe-puppy.p.rapidapi.com/',
  headers:{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"recipe-puppy.p.rapidapi.com",
    "x-rapidapi-key":"f68f06fffdmsh93a4effde1d78b4p160877jsnbb6b0796aecf",
    "useQueryString":true
  }
});
