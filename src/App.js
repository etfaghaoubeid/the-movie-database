import React ,{Fragment}from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/scss/main.scss";
import {Route} from 'react-router-dom'


import Main from './components/layouts/Main';
import Movies from './components/movie/Movies';
import SearchForm from './components/search/Form';
import ApiClient from './servies/ApiClient';

function App() {
 
  return (
    <Fragment>
      <Main>
        <SearchForm/>
        <Route exact path="/" component={Movies}/>
        <Route path="/search" component={SearchForm}/>
      </Main>
    </Fragment>
    
  );
}

export default App;
