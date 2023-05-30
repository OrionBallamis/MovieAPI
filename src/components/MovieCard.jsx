export default function MovieCard(props) {
    return (<div className="movie-card">
        <div>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
            <h3>{movie.original_title}</h3>
        </div>
    </div>)
}