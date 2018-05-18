import React, { Component } from 'react';
import ReactDOM from "react-dom"
import PropTypes from 'prop-types';
import Details from '../Details'
import Main from '../Main'
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    
    this.state = {
      movies          : this.props.movies,
      selectedMovie   : this.props.selectedMovie,
      orderBy         : this.props.orderBy,
      searchTerms     : this.props.searchTerms,
    }
    // this.handleItemSelected = this.handleItemSelected.bind(this);
  }

//   handleItemSelected(id) {
    
//     var currentId = id;
//     var selectedFilm = this.state.films.find(function(item)
//     {
//       return item.id ==  currentId;
//     }); 
//     selectedFilm = selectedFilm ? selectedFilm : new Object();
//     console.log(selectedFilm);

//     this.state.selectedFilm = selectedFilm;
//     this.setState({ selectedFilm: this.state.selectedFilm });
// }

  render() {
    const selectedMovie = this.state.selectedMovie;
    return (
      <div className="App">
          <div className="container"> 
            <div className="row header">
              <span>netflixroulette</span>
            </div>
            <div className="row">

              {
                selectedMovie
                ? <Details {...this.state}/>
                : (<Main {...this.state}/>)
              }
            </div>
            <div className="row footer">
              <span className="pagination-centered">netflixroulette 2018</span>
            </div>
          </div>
      </div>
    );
  }
}

export default App;










