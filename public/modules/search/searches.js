export function getMovieCards(searches) {

    //create a new div for main container and set class
    const mainContainer = document.createElement('div');
    mainContainer.classList.add("main-container");

    searches.forEach((movie)=> {
        let movieCard = document.createElement('div');
        movieCard.classList.add('card');

        let info = document.createElement('div');
        info.classList.add('movie-info');
        movieCard.appendChild(info);

        let movieTitle = document.createElement('h1');
        movieTitle.innerText = movie.title;
        info.appendChild(movieTitle);

        mainContainer.appendChild(movieCard);
    });
    return mainContainer;
}

