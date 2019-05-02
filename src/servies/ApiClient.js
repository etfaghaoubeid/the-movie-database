import React, { useEffect, useState } from 'react';
import { API_KEY } from '../config/keys';

export default function ApiClient() {
  const [query, setQuery] = useState('');
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    )
      .then(res => res.json())
      .then(data => console.log(data), 'Api service');
  }, [query]);
  return <div />;
}
