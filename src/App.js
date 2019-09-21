import React, { Component } from 'react';
import { CardList } from './components/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      characters: []
    };
  }

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character/').then(response =>
      response
        .json()
        .then(name => this.setState({ characters: name.results.slice(0, 8) }))
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
