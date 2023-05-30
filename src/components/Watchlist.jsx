export default function WatchList(props){
    let movieDisplay = props.list.map(() =>{
        
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