export const NEXT_PAGE = "NEXT_PAGE";
export const PREV_PAGE = "PREV_PAGE";
export const SET_PAGE = "SET_PAGE";

export const nextPage = () => ({
  type: NEXT_PAGE,
});

export const prevPage = () => ({
  type: PREV_PAGE,
});

export const setPage = (page) => ({
  type: SET_PAGE,
  page
});
