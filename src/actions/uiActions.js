export const NEXT_PAGE = "NEXT_PAGE";
export const SET_PAGE = "SET_PAGE";

//for loading more users
export const nextPage = () => ({
  type: NEXT_PAGE,
});

//for switching between user's cached data
export const setPage = (page) => ({
  type: SET_PAGE,
  page
});
