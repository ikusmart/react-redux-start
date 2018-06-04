import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Search from '../../Components/Search';
import SearchInformation from '../../Components/SearchInformation';
import Movies from '../../Components/Movies';
import MovieDetail from '../../Components/MovieDetail';


class Details extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      movies: this.props.movies,
      selectedMovie: this.props.selectedMovie,
      orderBy: this.props.orderBy,
      searchTerms: this.props.searchTerms,
    };
  }

  render() {
    let movies = this.state.movies;
    let searchTerms = this.state.searchTerms;
    return (
        <React.Fragment>
          <MovieDetail movie={this.state.selectedMovie} />
          <SearchInformation orderBy={this.state.orderBy} countMoviesFound={movies && movies.length} />
          <Movies movies={this.state.movies} />
        </React.Fragment>
    );
  }
}


export default Details;
