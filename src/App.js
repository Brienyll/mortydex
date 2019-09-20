import React, { Component } from 'react';
import { CardList } from './components/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      characters: [],
      images: []
    };
  }

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character/?name=morty').then(
      response =>
        response
          .json()
          .then(name => this.setState({ characters: name.results.slice(0, 8) }))
    );
    fetch('https://rickandmortyapi.com/api/character/?name=morty').then(
      response =>
        response
          .json()
          .then(image => this.setState({ images: image.results.slice(0, 8) }))
    );
  }
  render() {
    return (
      <div className="App">
        <CardList
          characters={this.state.characters}
          images={this.state.images}
        />
      </div>
    );
  }
}

export default App;
