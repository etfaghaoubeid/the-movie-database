import React ,{Fragment}from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/scss/main.scss";

import Main from './components/layouts/Main';
import Movies from './components/movie/Movies';
function App() {
 
  return (
    <Fragment>
      <Main>
        <h1>Movie Bd</h1>
        <Movies/>
      </Main>
    </Fragment>
    
  );
}

export default App;
