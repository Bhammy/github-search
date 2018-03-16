import { RECEIVE_RESULTS } from '../actions/searchActions';

const resultsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_RESULTS:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default resultsReducer;
