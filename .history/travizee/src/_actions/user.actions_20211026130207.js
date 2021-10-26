import { userConstants } from "./../constants/user.constants";
import { userService } from "./../services/user.service";
import { history } from "./../_helpers/history";
import Swal from "sweetalert2";

export const userActions = {
    login,
    register,
    facebookLogin,
  };

  function login(email, password) {
    return (dispatch) => {
      dispatch(request({ email }));
  
      userService.login(email, password).then(
        (user) => {
          dispatch(success(user));
          history.push("/profile");
        },
        (error) => {
          Swal.fire({
            title: "Error!",
            text: error.toString(),
            icon: "error",
            confirmButtonText: "Okay",
          });
          dispatch(failure(error.toString()));
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
            text: "Registered Successfully !",
            icon: "success",
            confirmButtonText: "Okay",
          });
  
        },
        (error) => {
          dispatch(failure(error.toString()));
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

  function facebookLogin(facebookLoginRequest) {
    return (dispatch) => {
      dispatch(request( facebookLoginRequest ));
  
      userService.facebookLogin(facebookLoginRequest).then(
        (user) => {
          dispatch(success(user));
          history.push("/profile");
        },
        (error) => {
          Swal.fire({
            title: "Error!",
            text: error.toString(),
            icon: "error",
            confirmButtonText: "Okay",
          });
          dispatch(failure(error.toString()));
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
