import React ,{useEffect,useState}from 'react'


import {API_KEY} from "../../config/keys"
import Movie from './Movie';
function Movies() {
    let [movies,setMovies]= useState([]);
    useEffect(() => {
       fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
        .then(res=>res.json() )
        .then(res=>setMovies(res.results))
        
    }, []);


  return (
    <div className="row">
    
      {
        movies.map(movie=><Movie key={movie.id} movie={movie}/>)
      }
      {console.log(movies)}
    </div>
  )
}
export default  Movies;