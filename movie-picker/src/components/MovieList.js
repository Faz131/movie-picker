import React from 'react';
import App from '../App';


const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;

    return (
        <>
        <div>
            {props.movies.map((movie, index) => (
                <div className='image-container d-flex justify-content-start m-3'>
                    <img src={movie.Poster} alt='movie'></img>
                    <p>{movie.Title}</p>
                    <div
                        onClick={() => props.handleFavouritesClick(movie)}
                        className='overlay d-flex align-items-center justify-content-center'
                    >
                        {/* <FavouriteComponent /> */}
                    </div>
                </div>
            ))}
        </div>
        </>
    );
};

export default MovieList;