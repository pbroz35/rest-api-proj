//getting the movie titles

export function getTopMovies() {
    return fetch("http://localhost:8000/api/popular")
      .then((response) => response.json())
      .then((data) => {
        const movieTitles = data.results.map((movie) => movie.title);
        return movieTitles;
      })
      .catch((error) => {
        console.error(error);
      });
  }