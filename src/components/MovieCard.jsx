export default function MovieCard(props) {
    return (<div className="movie-card">
        <div>
            <img src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`} alt="" />
            <h3>{props.movie.original_title}</h3>
        </div>
        <button>Add to List</button>
    </div>)
}