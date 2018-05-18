import React from 'react';
import PropTypes from 'prop-types';
import './Movies.css';
import Movie from './Components/MovieCard';
//import EmptyResult from './Components/EmptyResult';

class Movies extends React.Component {
    static propTypes = {
        movies: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            release_date: PropTypes.string.isRequired,
            genres: PropTypes.arrayOf(PropTypes.string).isRequired,
            poster_path: PropTypes.string.isRequired,
        })).isRequired
    };

    render() {
        const { movies } = this.props;

        return movies && movies.length ? (
            <div className="container">
                <div className="row">
                    {movies.map((item, index) => <div className="col-4" key={index}><Movie movie={item} /></div>)}
                </div>
            </div>
        ) : (
                null
            );
    }
}

export default Movies