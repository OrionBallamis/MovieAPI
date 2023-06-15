import react from 'react';
import MovieCard from "./MovieCard";

export default function MovieScreen({ addMovie, movieList, page, setPage, list, removeMovie}) {
    const decrement = () => setPage(page - 1)
    const increment = () => setPage(page + 1)
    let movieDisplay = movieList.map((movie, index) => {
        return <MovieCard movie={movie} addMovie={addMovie} list={list} removeMovie={removeMovie}/>
    });


    return (
        <div className="page">
            <header>
                <h1>Orion Ballamis's Movie Theatre</h1>
                <h3>Add a movie to your watchlist</h3>
                <div className="btn-container">
                    <button onClick={page !== 1 && decrement}>previous</button>
                    <button onClick={increment}>Next</button>
                </div> 
                <div className="movieCounter">
                    {movieDisplay}
                </div>
            </header>
        </div>
    )
}