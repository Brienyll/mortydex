import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      character: [
        {
          name: 'Morty',
          id: 'asdd2'
        },
        {
          name: 'Jessica',
          id: 'sadqw'
        },
        {
          name: 'Beth',
          id: '12dsc'
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.character.map(character => (
          <h1> {character.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
