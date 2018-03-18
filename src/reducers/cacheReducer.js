import { RECEIVE_FOLLOWERS, SET_SEARCH_HISTORY } from '../actions/searchActions';

const cacheReducer = (state = { searchHistory: [] }, action) => {
  switch (action.type) {
    case SET_SEARCH_HISTORY:
      let newHistory = [];
      let pushTerm = action.searchTerm;
      state.searchHistory.forEach( (item) => {
        if (item.toLowerCase() !== action.searchTerm.toLowerCase()) {
          newHistory.push(item);
        } else if (item.toLowerCase() === action.searchTerm.toLowerCase()) {
          pushTerm = item;
        }
      });
      newHistory.push(pushTerm);
      return Object.assign({}, state, { searchHistory: newHistory });
    case RECEIVE_FOLLOWERS:
      return Object.assign({}, state, { [action.page]: action.payload });
    default:
      return state;
  }
};

export default cacheReducer;
