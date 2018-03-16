import * as SearchUtil from '../util/searchUtil';

export const SET_SEARCH = "SET_SEARCH";
export const RECEIVE_RESULTS = "RECEIVE_RESULTS";
export const SET_SORT_ORDER = "SET_SORT_ORDER"

export const setSearch = ({ searchTerm }) => ({
  type: SET_SEARCH,
  searchTerm
});

export const setSort = sortOrder => ({
  type: SET_SORT_ORDER,
  sortOrder
});

export const receiveResults = (payload) => ({
  type: RECEIVE_RESULTS,
  payload
})

export const searchUser = search => async (dispatch, getState) => {
  dispatch(setSearch(search));
  const payload = await SearchUtil.getUserData(search, getState().search.sortOrder);
  let results = payload.items.reduce( (accum, current) => {
    accum[current.id] = current;
    return accum
  }, {});
  dispatch(receiveResults(results));
};
