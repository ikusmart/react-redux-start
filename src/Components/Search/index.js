import React, { Component } from 'react';
import ReactDOM from "react-dom"
import PropTypes from 'prop-types';
import './Search.css';
import ErrorBoundary from '../../Common/ErrorBoundary'


class Search extends React.PureComponent {
    static propTypes = {
        searchTerm: PropTypes.string,
        searchByTitle: PropTypes.bool,
        searchByGenre: PropTypes.bool,
    };

    constructor(props){
      super(props);
      this.state = {
        searchTerm: this.props.searchTerm || null,
        searchByTitle: this.props.searchByGenre || false,
        searchByGenre: this.props.searchByTitle || true
      }
    }
  
    render() {

      const searchByTitle =  this.state.searchByTitle;
      const searchByGenre =  this.state.searchByGenre;
      return (
        <ErrorBoundary>
            <div className="search-container col-12">
                <div className="container">
                <form>
                    <div className="row search-header">
                    <div className="col-12"><span>FIND YOUR MOVIE</span></div>    
                    </div>
                    <div className="row search-input">
                        <div className="col-12">
                            <input type="text" className="form-control" value={this.state.searchTerms} id="inlineFormInput" placeholder="input search value..."/>
                        </div>
                    </div>
                    <div className="row search-options">
                        <div className="col-10">
                            Search by
                            <button type="button" className={"search-filter-button btn " + (searchByTitle ? 'active-search-botton' : "")}>Title</button>
                            <button type="button" className={"search-filter-button btn " + (searchByGenre ? 'active-search-botton' : "")}>Genre</button>
                        </div>
                        <div className="col-2">
                            <button className="search-button btn active-search-botton">SEARCH</button>
                        </div>
                        
                    </div>
                </form>
                </div>
            </div>
        </ErrorBoundary>
      );
    }
  }
  
  
  export default Search;