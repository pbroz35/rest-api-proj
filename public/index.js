import { topMovies } from "./top-movies/topmovies.js";

const btn = document.querySelector('#top');

//listening to see if user clicks the button
btn.addEventListener('click', async ()=> { //create a div and append to the body
    const div = await topMovies();
    document.querySelector("body").appendChild(div);
});