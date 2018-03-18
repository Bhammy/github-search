import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import SearchBar from './components/search/searchBar';
import SearchHistory from './components/search/searchHistory';
import UserData from './components/results/userData';
import ResultsList from './components/results/resultsList';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main className="App">
          <header className="App-header">
            <h1 className="App-title">GITHUB USER SEARCH</h1>
          </header>
        <section className="app_body">
          <section className="prev_searches__container">
            <p>Previously Viewed</p>
            <SearchHistory />
          </section>
          <content className="results__content">
            <SearchBar />
            <UserData />
            <ResultsList />
          </content>
        </section>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
