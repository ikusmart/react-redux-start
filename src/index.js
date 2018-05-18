import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moviesDB from './res/data.json';
import App from './Containers/App';

var movies = moviesDB.data;
//var selectedMovie = movies[0];
var selectedMovie = null;
var orderBy = "rating";
var searchTerms = {searchTerm: null, searchByTitle: true, searchByGenre:false}

ReactDOM.render(
                <App movies={movies} 
                    selectedMovie = {selectedMovie} 
                    orderBy={orderBy} 
                    searchTerms={searchTerms} 
                />, 
                document.getElementById('app')
);
