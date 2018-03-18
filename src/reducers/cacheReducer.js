import { RECEIVE_FOLLOWERS, SET_SEARCH_HISTORY } from '../actions/searchActions';

const cacheReducer = (state = { searchHistory: [] }, action) => {
  switch (action.type) {
    case SET_SEARCH_HISTORY:
      let newHistory = [];
      state.searchHistory.forEach( (item) => {
        if (item !== action.searchTerm) {
          newHistory.push(item);
        }
      });
      newHistory.push(action.searchTerm);
      return Object.assign({}, state, { searchHistory: newHistory });
    case RECEIVE_FOLLOWERS:
      return Object.assign({}, state, { [action.page]: action.payload });
    default:
      return state;
  }
};

export default cacheReducer;
