import { RECEIVE_FOLLOWERS } from '../actions/searchActions';

const resultsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_FOLLOWERS:
      let followers = Object.assign({}, state[action.userData.login.toLowerCase()], action.payload);
      return Object.assign({}, state, { [action.userData.login.toLowerCase()]: followers });
    default:
      return state;
  }
};

export default resultsReducer;
