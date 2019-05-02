import React ,{useState,useEffect}from 'react'

import {Col, Button, Form, FormGroup,  Input,Row } from 'reactstrap';
import {Link} from 'react-router-dom';

import {API_KEY,BASE_URL} from '../../config/keys'
import Movie from './Movie' 

function SearchForm() {
  const [query,setQuery] = useState('')
  const [movies ,setMovies] = useState([])
  const handleChange= (e)=>{
    setQuery(e.target.value)

  }
  const handleSubmit= (event)=>{
    event.preventDefault()
    fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
        .then(res=>res.json())
        .then(data=>setMovies(data.results))
  }
  return (
    <div>
    <Row>
        <Form inline onSubmit={handleSubmit}>
          
       <FormGroup>
          <Input type="text" value={query} onChange={handleChange} name="pas" placeholder="Search for Movie " />
        </FormGroup>
      
        <Button type="submit">Submit</Button>
        </Form>
    </Row> 
    <Row>    
    {movies.map(movie=><Movie key={movie.id} movie={movie} col={10}/>)}
    </Row>
    </div>
  )
}
export default  SearchForm;