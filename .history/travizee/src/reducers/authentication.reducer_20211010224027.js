import { userConstants } from './../constants/user.constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: false, user, isLoading: false } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
        isLoading : true

      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
        isLoading : false
      };
    case userConstants.LOGIN_FAILURE:
      return {
        isLoading : false
      };
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}