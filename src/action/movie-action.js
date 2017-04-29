export const selectedMovie = (movie) => {
    console.log('you clicked on user' , movie.movieName);
    return {
        type: 'MOVIE_SELECTED',
        payload: movie
    }
}