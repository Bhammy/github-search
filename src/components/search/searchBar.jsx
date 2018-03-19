import React from 'react';
import { searchUser } from '../../actions/searchActions';
import { setPage } from '../../actions/uiActions';
import { connect } from 'react-redux';
import './searchBar.css';

//=========================
const mapDispatchToProps = dispatch => ({
  searchUser: (search) => dispatch(searchUser(search)),
  setPage: (page) => dispatch(setPage(page)),
});


//=========================
class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { searchTerm: "" };
  }

  handleChange(e) {
    this.setState({ searchTerm: e.currentTarget.value });
  }

  searchUser(e) {
    e.preventDefault();
    // on search of new user, set page to 1;
    this.props.setPage(1);
    this.props.searchUser(this.state);
  }

  render() {
    return (
      <div className="searchBar__main">
        <form onSubmit={ (e) => this.searchUser(e) } className="searchBar__form" >
          <input  type="text"
                  onChange={ (e) => this.handleChange(e) }
                  placeholder="Search Usernames"
          />
        </form>
      </div>
    );
  }

}

export default connect(null, mapDispatchToProps)(SearchBar);
