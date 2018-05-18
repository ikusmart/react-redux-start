import React from 'react';
import PropTypes from 'prop-types';
import './SearchInformation.css';

class SearchInformation extends React.Component {
    static defaultProps = {
        countMoviesFound: 0,
        orderBy: "releaseDate",
        genres: ["asdasd","234234"]
    };

    render() {
        const { countMoviesFound, orderBy, genres } = this.props;

        return (
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
                                        Order by 
                                        <button type="button" className={"btn " + (orderBy == "releaseDate" ? "active" : "")}>release date</button>
                                        <button type="button" className={"btn " + (orderBy == "rating" ? "active" : "")}>rating</button>
                                    </div>
                            ) 
                        : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchInformation