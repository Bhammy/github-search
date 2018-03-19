import { SET_SEARCH, GET_CACHED_SEARCH } from '../actions/searchActions';

const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return Object.assign({}, state, { searchTerm: action.searchTerm });
    case GET_CACHED_SEARCH:
      return Object.assign({}, state, { searchTerm: action.searchTerm });
    default:
      return state;
  }
};

export default searchReducer;
