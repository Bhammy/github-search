import { combineReducers } from 'redux';
import search from './searchReducer';
import results from './resultsReducer';
import cache from './cacheReducer';
import ui from './uiReducer';

export default combineReducers({
  search,
  results,
  cache,
  ui
});
