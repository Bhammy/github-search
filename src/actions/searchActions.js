import * as SearchUtil from '../util/searchUtil';

export const SET_SEARCH = "SET_SEARCH";
export const RECEIVE_FOLLOWERS = "RECEIVE_FOLLOWERS";
export const RECEIVE_USER_DATA = "RECEIVE_USER_DATA";
export const SET_SORT_ORDER = "SET_SORT_ORDER"
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

export const setSort = sortOrder => ({
  type: SET_SORT_ORDER,
  sortOrder
});

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

export const searchUser = search => async (dispatch, getState) => {
  dispatch(setSearch(search));
  const { page } = getState().ui;
  const userData = await SearchUtil.getUserData(search);
  const payload = await SearchUtil.getFollowerData(search, page);

  if (payload.message) {
    return;
  }

  let results = payload.reduce( (accum, current) => {
    accum[current.id] = current;
    return accum
  }, {});

  dispatch(receiveUserData(userData));
  dispatch(receiveFollowers(userData, results, page));
};
