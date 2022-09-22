import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from "./components/Navbar";
import HomePage from "./components/HomePage";
import MovieResult from "./components/MovieResult";
import AddMovie from "./components/AddMovie";
import DeleteMovie from "./components/DeleteMovie";

export const MainContext = React.createContext();

function App() {

  const[movies,setMovies]= useState([]);
  const[url,setUrl]= useState('http://localhost:5867/movie')
  const[input, setInput] = useState('')

  const obj = {
    movies,
    setMovies,
    url,
    setUrl,
    input,
    setInput
  }


  return (
    <MainContext.Provider value ={obj}>
    <Router>
    <Navigation/>
      <Routes>
        <Route path = '/' element= {<HomePage/>}></Route>
        <Route path = '/movie' element= {<MovieResult/>}></Route>
        <Route path = 'add_movie' element= {<AddMovie/>}></Route>
        <Route path = 'remove' element= {<DeleteMovie/>}></Route>
      </Routes>
    </Router>
    </MainContext.Provider>
  );
}

export default App;
