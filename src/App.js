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

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {currentId: this.props.currentId, films: this.props.films};
    this.handleItemSelect = this.handleItemSelect.bind(this);
  }

  handleItemSelect(event)
  {
    this.props.onItemSelected(this.props.id);
    event.stopPropagation()
  }

  render() {
     var handleItemSelect = this.props.onItemSelected;
      return (
        <div className="list-films">
            {this.state.films.map(film=><ListItem
                      key={film.id}
                      id={film.id}
                      title={film.title}
                      vote_average={film.vote_average}
                      poster_path = {film.poster_path}
                      onItemSelected={handleItemSelect} 
                      />)}
        </div>
      )
  }
}






