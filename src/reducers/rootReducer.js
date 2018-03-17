import { combineReducers } from 'redux';
import search from './searchReducer';
import followers from './followersReducer';
import users from './userReducer';
import cache from './cacheReducer';
import ui from './uiReducer';

export default combineReducers({
  search,
  followers,
  users,
  cache,
  ui
});
