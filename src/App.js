import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      count: [],
      character: []
    };
  }

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character/?name=morty').then(
      response =>
        response
          .json()
          .then(name => this.setState({ character: name.results.slice(0, 8) }))
    );
  }

  render() {
    return (
      <div className="App">
        {this.state.character.map(character => (
          <h1 key={character.id}> {character.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
