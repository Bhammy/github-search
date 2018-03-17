import { NEXT_PAGE, SET_PAGE } from '../actions/uiActions';
import { SET_SEARCH, RECEIVE_USER_DATA } from '../actions/searchActions';

const uiReducer = (state = { page: 1, searching: false }, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case NEXT_PAGE:
      return Object.assign({}, state, { page: state.page + 1 });
    case SET_PAGE:
      return Object.assign({}, state, { page: action.page });
    case SET_SEARCH:
      newState.searching = true;
      return newState;
    case RECEIVE_USER_DATA:
      newState.searching = false;
      return newState;
    default:
      return state;
  }
};

export default uiReducer;
