import {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import MovieScreen from './components/movieScreen';
import Header from './components/header';
import axios from 'axios';
import WatchList from './components/Watchlist';

function App() {
  const [movieList, setMovielist] = useState([])
  const [watchList, setWatchList] = useState([])
  const [page, setPage] = useState(1)

  const addMovie = (movie) => {

  }

  const getData = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
      .then((res) => {
        console.log(res.data.results)
        setMovielist(res.data.results)
      })
  }

  useEffect(() => {
    getData()
  }, [page])

  return (
    <div className="App">
      <Header></Header>
      <main>
      <MovieScreen
        movieList={movieList}
        page={page}
        setPage={setPage}
        list={list}
      ></MovieScreen>
      <WatchList list={list}></WatchList>
      </main>
    </div>
  );
}

export default App;
