import React from 'react';
import { connect } from 'react-redux';
import './resultsList.css';

//=========================
const mapStateToProps = (state) => ({
  followers: state.followers,
  cache: state.cache,
});

//=========================
class ResultsList extends React.Component {

  createFollowersList() {
    let { followers } = this.props;
    let followerIds = Object.keys(followers);

    if (followerIds.length === 0) {
      return (
        <li key={ "-99" }>No followers found.</li>
      );
    }

    return followerIds.map( (follower) => {
        return(
          <li key={follower}>
            <img  src={followers[follower].avatar_url }
                  alt={`avatar_img_${follower}`}
            />
          <p>{ followers[follower].login }</p>
          </li>
        );
    });
  }

  render() {

    return(
      <ul>
        { this.createFollowersList() }
      </ul>
    );
  }
}

export default connect(mapStateToProps)(ResultsList);
