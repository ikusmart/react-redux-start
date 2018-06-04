import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moviesDB from './res/data.json';
import App from './Containers/App';

const movies = moviesDB.data;
//const selectedMovie = movies[0];
const selectedMovie = null;
const orderBy = 'rating';
const searchTerms = { searchTerm: null, searchByTitle: true, searchByGenre: false };

ReactDOM.render(
  <App
    movies={movies}
    selectedMovie={selectedMovie}
    orderBy={orderBy}
    searchTerms={searchTerms}
  />,
  document.getElementById('app'),
);
