import React from 'react';
import { connect } from 'react-redux';
import './userData.css';

//=========================
const mapStateToProps = (state) => ({
  users: state.users,
  searchTerm: state.search.searchTerm,
  searching: state.ui.searching,
});

//=========================
class UserData extends React.Component {

  render() {
    let { users, searchTerm, searching } = this.props;
    searchTerm = searchTerm ? searchTerm.toLowerCase() : searchTerm;
    let user = users[searchTerm];

    if (searching) {
      return (
        <div>Searching...</div>
      );
    } else if (user) {
      return (
        <div className="results__user_container">
          <section className="results__user_header">
            <h2>{ user.login }</h2>
          </section>
          <div className="results__display">
            <section className="results__left">
              <img src={ user.avatar_url} alt="user_avatar_url"/>
            </section>
            <section className="results__right">
              <section className="results__user_details">
                <p>{ user.bio }</p>
                <p>Followers: { user.followers }</p>
                <p>Following: { user.following }</p>
                <p>Location: { user.location || "None Listed" }</p>
                <p>Personal site: { user.blog || "None Listed" }</p>
              </section>
            </section>
          </div>
        </div>
      );
    } else {
      return (
        <div>No user found.</div>
      );
    }
  }
}

export default connect(mapStateToProps)(UserData);
