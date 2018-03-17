import { RECEIVE_FOLLOWERS } from '../actions/searchActions';

const resultsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_FOLLOWERS:
      return action.payload;
    default:
      return state;
  }
};

export default resultsReducer;
