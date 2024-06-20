import express from 'express';
import fetch from 'node-fetch'

const router = express.Router();

router.get('/', async (req, res)=> {
    try {
        const {query} = req.query;
        if(!query) {
            return res.status(400).json({msg: "Query is required"});
        }

        const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1&api_key=f48dd460e6a0038d30b7ebb29c9713ca`;
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
            },
        };
      
        const response = await fetch(url, options);
        const data = await response.json();

        if(response.ok){
            console.log("successfully got search!");
            res.json(data);
        }
        else {
            console.error('Error fetching movies');
            res.status(response.status).json({msg: "Error, failed to fetchmovies"});
        }
    }
    catch(error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;