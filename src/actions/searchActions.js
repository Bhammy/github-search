import * as SearchUtil from '../util/searchUtil';
import { setPage } from './uiActions';

export const SET_SEARCH = "SET_SEARCH";
export const RECEIVE_FOLLOWERS = "RECEIVE_FOLLOWERS";
export const RECEIVE_USER_DATA = "RECEIVE_USER_DATA";
export const GET_CACHED_SEARCH = "GET_CACHED_SEARCH";
export const SET_SEARCH_HISTORY = "SET_SEARCH_HISTORY";

export const setSearch = ({ searchTerm }) => ({
  type: SET_SEARCH,
  searchTerm
});

export const getCachedSearch = (searchTerm) => ({
  type: GET_CACHED_SEARCH,
  searchTerm
});

export const setSearchHistory = (searchTerm) => ({
  type: SET_SEARCH_HISTORY,
  searchTerm
})

export const receiveFollowers = (userData, payload, page) => ({
  type: RECEIVE_FOLLOWERS,
  userData,
  payload,
  page
});

export const receiveUserData = (userData) => ({
  type: RECEIVE_USER_DATA,
  userData
});

export const pullUserFromCache = searchTerm => (dispatch, getState) => {
  dispatch(getCachedSearch(searchTerm));
  dispatch(setPage(getState().users[searchTerm].page));
}

export const searchUser = search => async (dispatch, getState) => {
  dispatch(setSearch(search));
  const { page } = getState().ui;
  // get user data
  const userData = await SearchUtil.getUserData(search);
  userData.page = page;
  // github api needs separate request to get followers
  const payload = await SearchUtil.getFollowerData(search, page);

  if (payload.message) {
    // payload.message indicates a bad request from github API
    dispatch(receiveUserData({ login: "" }));
    return;
  }

  let results = payload.reduce( (accum, current) => {
    accum[current.id] = current;
    return accum
  }, {});

  // send userData to store
  dispatch(receiveUserData(userData));
  // add user to search history
  dispatch(setSearchHistory(userData.login));
  // send user followers to store
  dispatch(receiveFollowers(userData, results, page));
};
