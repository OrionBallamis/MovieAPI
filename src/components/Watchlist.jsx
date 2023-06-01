import MovieCard from "./MovieCard";
export default function WatchList(props){
    const { } = props

    let movieDisplay = props.list.map(() =>{
        return (
            <MovieCard></MovieCard>
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