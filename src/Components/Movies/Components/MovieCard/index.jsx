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
        const year = Date.parse(movie.release_date)

        return (
            <React.Fragment>
                <div className="movie-card card card-inverse card-info">
                    <img className="card-img-top" src={movie.poster_path}/>
                    <div className="card-body">
                        <h4>{movie.title}</h4>
                        <span class="badge badge-secondary">{movie.release_date}</span>
                    </div>
                    <div className="card-footer">
                        <small>{movie && movie.genres.join(', ') || ""}</small>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Movie











