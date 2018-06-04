import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.css';

class Movie extends React.Component {
    static propTypes = {
        movie: PropTypes.shape({
            title: PropTypes.string.isRequired,
            release_date: PropTypes.string.isRequired,
            genres: PropTypes.arrayOf(PropTypes.string).isRequired,
            poster_path: PropTypes.string.isRequired,
        })
    };

    render() {
        const { movie } = this.props;
        const year = parseInt(movie.release_date)

        return (
            <React.Fragment>
                <div className="movie-card card card-inverse card-info">
                    <img className="movie-img card-img-top" src={movie.poster_path}/>
                    <div className="movie-body">
                        <div className="movie-title">{movie.title}</div>
                        <div className="movie-year">{year}</div>
                    </div>
                    <div className="movie-ganres">{movie && movie.genres.join(', ') || ""}</div>
                </div>
            </React.Fragment>
        );
    }
}

export default Movie











