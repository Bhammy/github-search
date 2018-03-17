import { RECEIVE_FOLLOWERS } from '../actions/searchActions';

const cacheReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_FOLLOWERS:
      return Object.assign({}, state, { [action.page]: action.payload});
    default:
      return state;
  }
};

export default cacheReducer;
