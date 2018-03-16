import { combineReducers } from 'redux';
import search from './searchReducer';
import results from './resultsReducer';

export default combineReducers({
  search,
  results,
});
