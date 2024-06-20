//makes the container

// Import the getTopMovies function from the get-movies.js module
import { getTopMovies } from "./get-movies.js";

// Define an async function to fetch and display top movies
export async function topMovies() {
    // Await the result of getTopMovies, which presumably fetches the top movies list
    
    const topMovies = await getTopMovies(); //getting movie titles
    
    // Create a new <div> element to contain the list of movies
    const listElementDiv = document.createElement('div');

    // Iterate over each movie in the topMovies array
    topMovies.forEach((movie) => {
        // Create a new <li> element for each movie
        let li = document.createElement('li');
        // Set the text of the <li> element to the movie name
        li.innerText = movie;
        // Append the <li> element to the <div> container
        listElementDiv.appendChild(li);
    });

    // Return the <div> element containing the list of movies
    return listElementDiv;
}
