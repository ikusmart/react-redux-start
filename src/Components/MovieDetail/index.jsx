import React from 'react';
import PropTypes from 'prop-types';
import './MovieDetail.css';

class MovieDetail extends React.Component {
    static propTypes = {
        movie: PropTypes.shape({
            title: PropTypes.string.isRequired,
            tagline: PropTypes.string.isRequired,
            overview: PropTypes.string.isRequired,
            vote_average: PropTypes.number.isRequired,
            budget: PropTypes.number.isRequired,
            runtime: PropTypes.number.isRequired,
            release_date: PropTypes.string.isRequired,
            genres: PropTypes.arrayOf(PropTypes.string).isRequired,
            poster_path: PropTypes.string.isRequired,
        })
    };

    render() {
        const { movie } = this.props;
        const year = Date.parse(movie.release_date);
        //const genres = this.state.genres.join(", ");

        return (

                <div className="movie-detail container">
                    <div className="row">
                        <div className="col-3">
                            <img className="card-img-top" src={movie.poster_path}/>
                        </div>
                        <div className="col-9">
                            <div className="row">
                                <div className="col-6 movie-title">{movie.title}</div><div className="col-3 movie-vote">{movie.vote_average}</div>
                            </div>
                            <div className="row">
                                <div className="col-12 movie-tagline">{movie.tagline}</div>
                            </div>
                            <div className="row">
                                <div className="col-3 movie-release_date">{movie.release_date}</div><div className="col-3 movie-runtime">{movie.runtime} min</div>
                            </div>
                            <div className="row">
                                <div className="col-12 movie-overview">{movie.overview}</div>
                            </div>
                            
                            <div className="row">
                                
                            </div>
                    </div>
                    </div>
                </div>
        );
    }
}

export default MovieDetail