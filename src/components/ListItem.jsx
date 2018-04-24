import React, { Component } from 'react';
import ReactDOM from "react-dom"

class ListItem extends React.Component {
    constructor(props){
          super(props);
        this.state = {id: this.props.id, title: this.props.title, vote_average: this.props.vote_average, poster_path: this.props.poster_path};
      }
  
    render() {
      return (
        <div className="list-item" onClick={() => this.props.onItemSelected(this.state.id)}> 
          <img className="list-item-poster" src={this.state.poster_path} />
          <h3>{this.state.title}}</h3>
          <p>Vote - {this.state.vote_average}</p>
        </div>
      );
    }
  }

  export default ListItem;