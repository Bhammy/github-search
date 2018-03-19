import React from 'react';
import { connect } from 'react-redux';
import { nextPage, setPage } from '../../actions/uiActions';
import { searchUser } from '../../actions/searchActions';
import './resultsList.css';

//=========================
const mapStateToProps = (state) => {

  let followers = state.search.searchTerm ?
    state.followers[state.search.searchTerm.toLowerCase()] :
    undefined;

  let followerIds = followers ?  Object.keys(followers) : [];

  return {
    followers: followers,
    followerIds: followerIds,
    searchTerm: state.search.searchTerm,
    users: state.users,
    cache: state.cache,
  };
};

const mapDispatchToProps = dispatch => ({
  loadMore: () => dispatch(nextPage()),
  setPage: (page) => dispatch(setPage(page)),
  searchUser: (search) => dispatch(searchUser(search)),
});

//=========================
class ResultsList extends React.Component {

  createFollowersList() {

    const { followers, followerIds } = this.props;

    if (followerIds.length === 0) {
      return (
        <li key={ "-99" }>No followers found.</li>
      );
    }

    return followerIds.map( (follower) => {
        return(
          <li key={follower} className={`results__entry_${follower}`}>
            <img  src={followers[follower].avatar_url }
                  alt={`avatar_img_${follower}`}
                  title={ `${followers[follower].login}` }
                  onClick={ () => this.searchUser(followers[follower].login) }
            />
          </li>
        );
    });
  }

  searchUser(username) {
    this.props.setPage(1);
    this.props.searchUser({ searchTerm: username });
  }

  loadMore(e) {
    e.preventDefault();
    this.props.loadMore();
    this.props.searchUser({ searchTerm: this.props.searchTerm });
  }

  render() {

    const moreButton = <button
        className="results__more_button"
        onClick={ (e) => this.loadMore(e) }
      >
      <strong>Load More</strong>
      </button>;

      let { users, searchTerm, followerIds } = this.props;
      searchTerm = searchTerm ? searchTerm.toLowerCase() : searchTerm;
      let user = users[searchTerm];



    if (user) {
      return(
        <div className="results__container">
          <div className="results__button">
            { (followerIds.length < user.followers) ? moreButton : null }
          </div>
          <ul className="results__entry_list">
            { this.createFollowersList() }
          </ul>
        </div>
      );
    } else {
      return null;
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsList);
