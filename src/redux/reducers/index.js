import {LOGIN, LOGOUT, USER} from '../actions/index.js';
import {combineReducers} from 'redux';

const initialState = {
  token: null,
  user: null,
  userId: null,
};
function User(state: any = initialState, action: any) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.data.token,
        userId: action.data.userId,
        user: action.data.user,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        user: null,
        userId: null,
      };
    case USER:
      return {
        ...state,
        user: action.data.user,
        userId: action.data.userId,
      };
    default:
      return state;
  }
}

const Reducer = combineReducers({
  User,
});
export default Reducer;
