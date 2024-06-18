import path from 'path';
const router = express.Router();



const fetch = require('node-fetch');

const url = 'https://api.themoviedb.org/3/search/movie?query=dune&include_adult=false&language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDhkZDQ2MGU2YTAwMzhkMzBiN2ViYjI5Yzk3MTNjYSIsInN1YiI6IjY2NzFjNzcyMjc1NGQwNmVkNmUyMzAxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SZz10Y5qJei4RMtqAzLPawoZXSdChps0b7QQbtMcFWc'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(
    json.results.map((movie)=> {
        console.log(movie.title);
    })
  ))
  .catch(err => console.error('error:' + err));