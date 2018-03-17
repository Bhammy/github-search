import { NEXT_PAGE, PREV_PAGE, SET_PAGE } from '../actions/uiActions';

const uiReducer = (state = { page: 1 }, action) => {
  switch (action.type) {
    case NEXT_PAGE:
      return { page: state.page + 1 };
    case PREV_PAGE:
      let prevNum = (state.page - 1 === 0) ? 1 : (state.page - 1);
      return { page: prevNum };
    case SET_PAGE:
      return { page: action.page };
    default:
      return state;
  }
};

export default uiReducer;
