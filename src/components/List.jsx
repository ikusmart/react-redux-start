import React, { Component } from 'react';
import ReactDOM from "react-dom"
import ListItem from "./ListItem"

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

  export default List;