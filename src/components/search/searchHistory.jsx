import React from 'react';
import { connect } from 'react-redux';
import { pullUserFromCache, setSearchHistory } from '../../actions/searchActions';
import './searchHistory.css';

//=========================
const mapStateToProps = state => ({
  history: state.cache.searchHistory
});

const mapDispatchToProps = dispatch => ({
  pullUserFromCache: (searchTerm) => dispatch(pullUserFromCache(searchTerm)),
  setSearchHistory: (searchTerm) => dispatch(setSearchHistory(searchTerm)),
});

//=========================
class SearchHistory extends React.Component {

  loadCachedResults(searchTerm) {
    this.props.pullUserFromCache(searchTerm);
    this.props.setSearchHistory(searchTerm);
  }

  createSearchHistory() {
    let reversedHist = this.props.history.slice(0).reverse();
    return reversedHist.map( (searchTerm) => {
      return <li key={ searchTerm }
        onClick={ () => this.loadCachedResults(searchTerm.toLowerCase()) }
      >
        <a>{ searchTerm }</a>
      </li>;
    });
  }

  render() {
    return(
      <ul>
        { this.createSearchHistory() }
      </ul>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchHistory);
