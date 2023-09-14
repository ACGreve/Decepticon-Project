// Hi
import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import Search from './components/Search';

function App() {
  let [search, setSearch] = useState("")
  let [message, setMessage] = useState('')
  let [data, setData] = useState([])

  const API_URL = `https://itunes.apple.com/search?term=${search}&entity=movie`;

  useEffect(() => {
    if(search){
    const fetchData = async () => {
      document.title = `${search} Movies`
      const response = await fetch(API_URL)
      const resData = await response.json()
      console.log(resData)
      if(resData.results.length > 0){
        setData(resData.results)
      }else {
        setMessage("Content not found")
      }
    }
    fetchData()
    }
  }, [search])

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
  }

  return (
    <div className="App">
      <Search handleSearch={handleSearch}/>
      {message}
    <div className='data'>
      <MovieList data={data}/>
    </div>
    </div>
  );
}

export default App;
