import { userConstants } from "./../constants/user.constants";
import { userService } from "./../services/user.service";
import { alertActions } from "./alert.actions";
import { history } from "./../_helpers/history";
import Swal from "sweetalert2";

export const userActions = {
    login,
    register,
  };

  function login(email, password) {
    return (dispatch) => {
      dispatch(request({ email }));
  
      userService.login(email, password).then(
        (user) => {
          dispatch(success(user));
          history.push("/cprofile/"+user.signupResponse.token);
        },
        (error) => {
          Swal.fire({
            title: "Error!",
            text: error.toString(),
            icon: "error",
            confirmButtonText: "Okay",
          });
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );
    };
  
    function request(user) {
      return { type: userConstants.LOGIN_REQUEST, user };
    }
    function success(user) {
      return { type: userConstants.LOGIN_SUCCESS, user };
    }
    function failure(error) {
      return { type: userConstants.LOGIN_FAILURE, error };
    }
  }
  
  function register(email, password) {
    return (dispatch) => {
      dispatch(request(email, password));
  
      userService.register(email, password).then(
        (user) => {
          dispatch(success(user));
          history.push("/login");
          Swal.fire({
            title: "Success!",
            text: "Check your mail for the confirmation link",
            icon: "success",
            confirmButtonText: "Okay",
          });
  
          dispatch(alertActions.success("Registration successful"));
        },
        (error) => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
          Swal.fire({
            title: "Error!",
            text: error.toString(),
            icon: "error",
            confirmButtonText: "Okay",
          });
        }
      );
    };
  
    function request(user) {
      return { type: userConstants.REGISTER_REQUEST, user };
    }
    function success(user) {
      return { type: userConstants.REGISTER_SUCCESS, user };
    }
    function failure(error) {
      return { type: userConstants.REGISTER_FAILURE, error };
    }
  }