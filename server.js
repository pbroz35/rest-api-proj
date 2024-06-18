import express from 'express'; // This is the Express.js framework, used for building web applications and APIs.
import path from 'path'; //mported from the Node.js standard library. It provides utilities for working with file and directory paths.
import { fileURLToPath } from 'url'; //used to convert a file URL from import.meta.url to a file path string
import moviesRouter from './src/popular.js' //imported from ./src/fetch_popular.js, router created using Express to handle routes realted to fetching popular movies

//variables to get current file directory and filename
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//express app created
const app = express();

//defining the port to use
const PORT = process.env.PORT || 8000;

//set public as the folder as static - can be directly accessed from the server
app.use(express.static(path.join(__dirname, 'public')));

//use the moviesRouter
app.use('/api/popular', moviesRouter);


app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));