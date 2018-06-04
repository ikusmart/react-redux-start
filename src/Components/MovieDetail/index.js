import React from 'react';
import PropTypes from 'prop-types';
import './MovieDetail.css';

class MovieDetail extends React.PureComponent {
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
        poster_path: PropTypes.string.isRequired
      })
    };

    render() {
      const { movie } = this.props;
      const year = parseInt(movie.release_date);

      return (
	<div className="movie-detail container">
		<div className="row">
			<div className="col-4">
				<img className="card-img-top" src={movie.poster_path} />
			</div>
			<div className="col-8">
				<div className="row">
					<div className="col-6 movie-title">{movie.title}</div>
					<div className="movie-vote">
						{movie.vote_average}
					</div>
				</div>

				<div className="row ">
					<div className="col-12 movie-tagline">{movie.tagline}</div>
				</div>
				<div className="row">
					<div className="col-3 movie-release_date">{year}</div><div className="col-3 movie-runtime">{movie.runtime} min</div>
				</div>
				<div className="row">
					<div className="col-12 movie-overview">{movie.overview}</div>
				</div>

				<div className="row">
					<div className="col-12 movie-genres">{movie && movie.genres.join(', ') || ''}</div>
				</div>
			</div>
		</div>
	</div>
      );
    }
}

export default MovieDetail;
