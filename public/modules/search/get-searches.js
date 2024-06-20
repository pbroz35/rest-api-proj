export function getSearches(searchTerm) {
    return fetch(`http://localhost:8000/api/search?query=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
          const movies = data.results.map((movie) => ({
              title: movie.title,
              image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            }));
            return movies;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }