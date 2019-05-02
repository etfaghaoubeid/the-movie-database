import React, { useState, useEffect } from 'react';

import { Col, Button, Form, FormGroup, Input, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

import { API_KEY, BASE_URL } from '../../config/keys';
import Movie from './Movie';

function SearchForm() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const handleChange = e => {
    setQuery(e.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
      .then(res => res.json())
      .then(data => setMovies(data.results));
  };
  return (
    <div>
      <div>
        <Row>
          <Col lg="10">
            <Form inline onSubmit={handleSubmit} className="search-form">
              <Input
                type="text"
                value={query}
                onChange={handleChange}
                name="pas"
                placeholder="Search for Movie "
              />
              <Button className="myButton" type="submit">
                {' '}
                Submit{' '}
              </Button>{' '}
            </Form>{' '}
          </Col>{' '}
        </Row>{' '}
      </div>{' '}
      <Row>
        {' '}
        {movies.map(movie => (
          <div className="col-lg-10">
            <Movie key={movie.id} movie={movie} col={5} />{' '}
          </div>
        ))}{' '}
      </Row>{' '}
    </div>
  );
}
export default SearchForm;
