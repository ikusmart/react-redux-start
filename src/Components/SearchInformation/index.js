import React from 'react';
import PropTypes from 'prop-types';
import './SearchInformation.css';
import ErrorBoundary from '../../Common/ErrorBoundary'

class SearchInformation extends React.PureComponent {
  render() {
    const { countMoviesFound, orderBy, genres } = this.props;

    return (
      <ErrorBoundary>
        <div className="container search-information-bar">
          <div className="row">
            <div className="col-4">
              { countMoviesFound ? (<span><b>{countMoviesFound || 0}</b> movies found</span>) : null }
            </div>
            <div className="col-4">
              {genres ? (<span>Film by <b>{genres.join(',')}</b> genres</span>) : null }
            </div>
            <div className="col-4">
              {
                              orderBy ?
                              (
                                <div className="orderby-options">
                                          Order by:
                                  <a className={`btn ${orderBy == 'releaseDate' ? 'active' : ''}`}>release date</a>
                                  <a className={`btn ${orderBy == 'rating' ? 'active' : ''}`}>rating</a>
                                </div>
                              )
                          : null
                          }
            </div>
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}

export default SearchInformation;
