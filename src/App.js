import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import SearchBar from './components/search/searchBar';
import ResultsList from './components/results/resultsList';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">GITHUB USER SEARCH</h1>
          </header>
          <SearchBar />
          <ResultsList />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
