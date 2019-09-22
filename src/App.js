import React, { Component } from 'react';
import { CardList } from './components/card-list.component';
import { SearchBox } from './components/search-box.component';

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
        <h1> Rick & Morty </h1>
        <SearchBox
          placeholder="search character"
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList characters={filteredCharacters} />
      </div>
    );
  }
}

export default App;
