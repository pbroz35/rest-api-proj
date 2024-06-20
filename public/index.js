import { topMovies } from "./modules/top-movies/topmovies.js";
import { getSearches } from "./modules/search/get-searches.js";
import { getMovieCards } from './modules/search/searches.js'


document.addEventListener("DOMContentLoaded", () => {
  const topBtn = document.querySelector("#top");

  topBtn.addEventListener("click", async () => {
    resetScreen();
    const topMoviesDiv = await topMovies();
    document.querySelector("body").appendChild(topMoviesDiv);
  });

  const searchBtn = document.querySelector("#submit");
  searchBtn.addEventListener("click", async (event) => {
    event.preventDefault();
    resetScreen();
    const searchBar = document.querySelector("#search-input");
    const searchTerm = searchBar.value.trim();
    if (searchTerm) {
      const searches = await getSearches(searchTerm);
      console.log(searches);
      const searchedMovies = getMovieCards(searches);
      document.querySelector("body").appendChild(searchedMovies);
    }
  });
});

function resetScreen(){
  const mainContainer = document.querySelector(".main-container");
  if (mainContainer) {
    mainContainer.remove();
  }
}