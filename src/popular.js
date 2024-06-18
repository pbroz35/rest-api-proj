// Importing the Express framework
import express from 'express';

// Creating a new router instance
const router = express.Router();

// Importing the 'node-fetch' library for making HTTP requests
import fetch from 'node-fetch'

// Defining a GET route on the router
router.get('/', async (req, res) => {
    try {
        // URL of the external API to fetch popular movies
        const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=f48dd460e6a0038d30b7ebb29c9713ca';

        // Options for the fetch request, specifying the method and headers
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        }

        // Making the fetch request to the external API
        const response = await fetch(url, options);

        // Parsing the response as JSON
        const data = await response.json();

        // Checking if the response is successful
        if(response.ok){
            // Sending the fetched data as the response in JSON format
            res.json(data);
        }
        else {
            // Logging an error message if the fetch was not successful
            console.error('Error fetching movies');
            // Sending an error response with the appropriate status code
            res.status(response.status).json({ msg: "Error, failed to fetch movies" });
        }
    } 
    catch(error) {
        // Sending a 500 Internal Server Error response in case of any exceptions
        res.status(500).json({ error: 'Internal server error' });
    }
})

// Exporting the router to be used in other parts of the application
export default router;
