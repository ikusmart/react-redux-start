import React, { Component } from 'react';
import ReactDOM from "react-dom"
import './App.css';
import data from './res/data.json';

import List from './components/List'
import Details from './components/Details'

class App extends Component {

  constructor(props){
    super(props);
    
    this.handleItemSelected = this.handleItemSelected.bind(this);
	  this.state = {films: [], selectedFilm: new Object()};
  }
  componentWillMount(){
    this.state.films.push(data.data);
    this.setState({films: data.data});
  }

  handleItemSelected(id) {
    
    var currentId = id;
    var selectedFilm = this.state.films.find(function(item)
    {
      return item.id ==  currentId;
    }); 
    selectedFilm = selectedFilm ? selectedFilm : new Object();
    console.log(selectedFilm);

    this.state.selectedFilm = selectedFilm;
    this.setState({ selectedFilm: this.state.selectedFilm });
}

  render() {

    return (
      <div className="App">
          <Details    selectedFilm = {this.state.selectedFilm}/>
          <List films={this.state.films} onItemSelected={this.handleItemSelected}/>
      </div>
    );
  }
}

export default App;










