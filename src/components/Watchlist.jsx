import MovieCard from "./MovieCard";
export default function WatchList({ list, removeMovie}){

    let movieDisplay =list.map((movie, list) =>{
        return (
            <MovieCard movie={movie} removeMovie={removeMovie} list={list}></MovieCard>
        );
    })

    return (
        <div className="watch-list">
            <h1>My watchlist</h1>
            <div className="movie-container">
                {movieDisplay}
            </div>
        </div>
    )
}