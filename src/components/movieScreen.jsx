import MovieCard from "./MovieCard";

export default function MovieScreen(props) {
    let movieDisplay = movieList.map((movie, index) => {
        return <MovieCard movie={movie}/>
    });


    return (
        <div>
            <header>
                <h1>Orion Ballamis's Movie Theatre</h1>
                <h3>Add a movie to your watchlist</h3>
                <div className="movieCounter">
                    {movieDisplay}
                </div>
            </header>
        </div>
    )
}