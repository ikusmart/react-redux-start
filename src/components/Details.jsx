import React, { Component } from 'react';
import ReactDOM from "react-dom"


class Details extends React.PureComponent {
    constructor(props){
      super(props);
      
        this.state = {
        id: this.props.selectedFilm.id,
        title: this.props.selectedFilm.title, 
        vote_average: this.props.selectedFilm.vote_average, 
        poster_path: this.props.selectedFilm.poster_path,
        overview: this.props.selectedFilm.overview, 
        budget: this.props.selectedFilm.budget,
      };
      
    }
  
    componentWillReceiveProps(props)
    {
      this.setState({id: props.selectedFilm.id,
        title: props.selectedFilm.title, 
        vote_average: props.selectedFilm.vote_average, 
        poster_path: props.selectedFilm.poster_path,
        overview: props.selectedFilm.overview, 
        budget: props.selectedFilm.budget,});
    }
  
    render() {
  
      var filmDetails = this.state.id 
                                    ? <div>
                                        <img className="list-item-poster" src={this.state.poster_path} />
                                        <h3>{this.state.title}</h3>
                                        <h2>{this.state.overview}</h2>
                                        <p>Vote - {this.state.vote_average}</p>
                                      </div>
                                    : <h1>No item selected</h1>;
  
      return (
        <div className="details">
          {filmDetails}
        </div>
      );
    }
  }
  
  
  export default Details;