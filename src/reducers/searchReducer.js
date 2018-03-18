import { SET_SEARCH, SET_SORT_ORDER, GET_CACHED_SEARCH } from '../actions/searchActions';

const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return Object.assign({}, state, { searchTerm: action.searchTerm });
    case GET_CACHED_SEARCH:
      return Object.assign({}, state, { searchTerm: action.searchTerm });
    case SET_SORT_ORDER:
      return Object.assign({}, state, { sortOrder: action.sortOrder });
    default:
      return state;
  }
};

export default searchReducer;
