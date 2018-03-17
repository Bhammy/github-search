import React from 'react';
import { connect } from 'react-redux';
import './resultsList.css';

//=========================
const mapStateToProps = (state) => ({
  followers: state.followers,
  followerIds: Object.keys(state.followers),
  cache: state.cache,
});

//=========================
class ResultsList extends React.Component {

  createFollowersList() {
    let { followers, followerIds } = this.props;

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
            />
          </li>
        );
    });
  }

  render() {
    return(
      <div className="results__container">
        <ul className="results__entry_list">
          { this.createFollowersList() }
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps)(ResultsList);
