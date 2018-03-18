import React from 'react';
import { connect } from 'react-redux';
import { getCachedSearch } from '../../actions/searchActions';

//=========================
const mapDispatchToProps = dispatch => ({
  getCachedSearch: (searchTerm) => dispatch(getCachedSearch(searchTerm)),
});

//=========================
class SearchHistory extends React.Component {

  loadCachedResults(searchTerm) {
    this.props.getCachedSearch(searchTerm);
  }

  createSearchHistory() {
    return this.props.history.map( (searchTerm) => {
      return <li key={ searchTerm }
        onClick={ () => this.loadCachedResults(searchTerm.toLowerCase()) }
      >
        { searchTerm }
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

export default connect(state => ({ history: state.cache.searchHistory.reverse() }), mapDispatchToProps)(SearchHistory);
