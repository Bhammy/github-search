import { RECEIVE_USER_DATA } from '../actions/searchActions';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER_DATA:
      return Object.assign({}, state, { [action.userData.login.toLowerCase()]: action.userData});
    default:
      return state;
  }
};

export default userReducer;
