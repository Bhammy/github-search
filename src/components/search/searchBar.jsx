import React from 'react';
import { searchUser, setSort } from '../../actions/searchActions';
import { connect } from 'react-redux';

//=========================
const mapDispatchToProps = dispatch => ({
  searchUser: (search) => dispatch(searchUser(search)),
  setSort: (sortOrder) => dispatch(setSort(sortOrder)),
});


//=========================
class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { searchTerm: "", customSort: "" };
  }

  handleChange(e) {
    this.setState({ searchTerm: e.currentTarget.value });
  }

  searchUser(e) {
    e.preventDefault();
    this.props.searchUser(this.state);
  }

  setSort(sortVal) {
    this.props.setSort(sortVal);
    this.setState({ customSort: `&sort=${sortVal}` });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={ (e) => this.handleChange(e) }/><button onClick={ (e) => this.searchUser(e) }>Search</button>
        <p>Sort by:</p>
        <select id="customSort" onChange={ (e) => this.setSort(e.currentTarget.value) }>
          <option value="" >Best match</option>
          <option value="followers" >Number of Followers</option>
          <option value="repositories" >Number of Repositories</option>
          <option value="joined" >Most Recently Joined</option>
        </select>
      </div>
    );
  }

}

export default connect(null, mapDispatchToProps)(SearchBar);
