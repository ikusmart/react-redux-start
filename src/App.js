import React, { Component } from 'react';
import ReactDOM from "react-dom"
import './App.css';
import data from './data.json';

function findElement(arr, propName, propValue) {
  for (var i=0; i < arr.length; i++)
    if (arr[i][propName] == propValue)
      return arr[i];

  // will return undefined if not found; you could return a default instead
}


class App extends Component {

  constructor(props){
    super(props);
    
    this.handleItemSelected = this.handleItemSelected.bind(this);
	  this.state = {films: [], currentId: null};
  }
  componentWillMount(){
    this.state.films.push(data.data);
    this.setState({films: data.data});
  }

  handleItemSelected(id) {
    this.setState({ currentId: id });
}

  render() {
    var selectedFilm = this.state.films.currentId ? findElement(this.state.films, "id", this.state.films.currentId) : null;

    return (
      <div className="App">
          <Details {...selectedFilm}/>
          {/*  */}
          <List films={this.state.films} onItemSelected={this.handleItemSelected}/>
      </div>
    );
  }
}

export default App;

class Details extends React.PureComponent {
  constructor(props){
    super(props);
    
	  this.state = {
      id: this.props.id,
      title: this.props.title, 
      vote_average: this.props.vote_average, 
      poster_path: this.props.poster_path,
      overview: this.props.overview, 
      budget: this.props.budget,
    };
    
  }

  

  render() {

    var filmDetails = this.props.id 
                                  ? <div>
                                      <img className="list-item-poster" src={this.state.poster_path} />
                                      <h3>{this.state.title}}</h3>
                                      <h2>{this.state.overview}}</h2>
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



class ListItem extends React.Component {
  constructor(props){
		super(props);
	  this.state = {id: this.props.id, title: this.props.title, vote_average: this.props.vote_average, poster_path: this.props.poster_path};
	}

  render() {
    return (
      <div className="list-item"> 
        <img className="list-item-poster" src={this.state.poster_path} />
        <h3>{this.state.title}}</h3>
        <p>Vote - {this.state.vote_average}</p>
      </div>
    );
  }
}

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {currentId: this.props.currentId, films: this.props.films};
  }

  render() {
      return (
        <div className="list-films">
            {this.state.films.map(film=><ListItem
                      key={film.id}
                      id={film.id}
                      title={film.title}
                      vote_average={film.vote_average}
                      poster_path = {film.poster_path}
                      // onTaskDelete={handleTaskDel} 
                      />)}
        </div>
      )
  }
}






