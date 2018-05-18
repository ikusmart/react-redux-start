import React, { Component } from 'react';
import ReactDOM from "react-dom"
import PropTypes from 'prop-types';
import './Search.css';


class Search extends React.PureComponent {
    static propTypes = {
        searchTerm: PropTypes.string,
        searchByTitle: PropTypes.bool,
        searchByGenre: PropTypes.bool,
    };
    state = {
        searchTerm: null,
        searchByTitle: true,
        searchByGenre:false
    }

    constructor(props){
      super(props);
      this.state = {
        searchTerms     : this.props.searchTerm,
        searchByTitle   : this.props.searchByGenre,
        searchByGenre   : this.props.searchByTitle
      }
    }
  
    render() {

      const searchByTitle =  this.state.searchByTitle || false;;
      const searchByGenre =  this.state.searchByGenre || false;;
      return (
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
      );
    }
  }
  
  
  export default Search;