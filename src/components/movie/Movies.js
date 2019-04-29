import React ,{useEffect,useState}from 'react'


import {API_KEY} from "../../config/keys"
import Movie from './Movie';
function Movies() {
    let [movie,setMovie]= useState([]);
    useEffect(() => {
       fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
        .then(res=>res.json() )
        .then(res=>setMovie(res.results))
        
    }, []);


  return (
    <div>
      <h1>hELLO</h1>
      {
        movie.map(item=><Movie key={item.id}/>)
      }
      {console.log(movie)}
    </div>
  )
}
export default  Movies;