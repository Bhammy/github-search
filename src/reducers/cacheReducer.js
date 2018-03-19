import { RECEIVE_FOLLOWERS, SET_SEARCH_HISTORY } from '../actions/searchActions';

const cacheReducer = (state = { searchHistory: [] }, action) => {
  switch (action.type) {
    case SET_SEARCH_HISTORY:
      let newHistory = [];
      let pushTerm = action.searchTerm;
      // copy search history, checking to see if current searchTerm is in array
      state.searchHistory.forEach( (item) => {
        if (item.toLowerCase() !== action.searchTerm.toLowerCase()) {
          newHistory.push(item);
        } else if (item.toLowerCase() === action.searchTerm.toLowerCase()) {
          // if searchTerm exists in array, use it instead of searchTerm (keeps username capitalized)
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
