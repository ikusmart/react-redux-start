import React, { Component } from 'react';
import ReactDOM from "react-dom"
import PropTypes from 'prop-types';
import Search from '../../Components/Search';
import SearchInformation from '../../Components/SearchInformation';
import Movies from '../../Components/Movies';


class Main extends React.PureComponent {
    constructor(props){
      super(props);
      
      this.state = {
        movies          : this.props.movies,
        selectedMovie   : this.props.selectedMovie,
        orderBy         : this.props.orderBy,
        searchTerms     : this.props.searchTerms,
      }

    }
  
    render() {
        
      var movies = this.state.movies;
      var searchTerms = this.state.searchTerms;
      return (
        <React.Fragment>
            <Search searchTerm={searchTerms.searchTerm} searchByTitle={searchTerms.searchByTitle} searchByGenre={searchTerms.searchByGenre}  />
            <SearchInformation orderBy={this.state.orderBy} countMoviesFound={movies && movies.length}/>
            <Movies movies={this.state.movies} />
        </React.Fragment>
      );
    }
  }
  
  
  export default Main;