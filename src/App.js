import React, { Component } from 'react';
import { CardList } from './components/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      characters: [],
      searchField: ''
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
    const { characters, searchField } = this.state;
    const filteredCharacters = characters.filter(character =>
      character.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <input
          type="search"
          placeholder="search character"
          onChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList characters={filteredCharacters} />
      </div>
    );
  }
}

export default App;
