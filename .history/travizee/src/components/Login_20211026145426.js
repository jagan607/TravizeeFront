import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userActions } from "./../_actions/user.actions";
import "./../index.css";
import SpinnerPage from "./SpinnerPage";
import ReactGifLoader from "./ReactGifLoader";
import Swal from "sweetalert2";
import { Navbar, Nav, Container } from 'react-bootstrap';
import DehazeIcon from '@material-ui/icons/Dehaze';
import { FacebookFilled } from "@ant-design/icons";
import { Button } from "antd";



export const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};


const initFacebookLogin = () => {
  
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      submitted: false,
      errors: {
        email: "",
        password: "",
      },
    };
    this.getFacebookAccessToken = this.getFacebookAccessToken.bind(this);
  }

  componentDidMount(){

  window.fbAsyncInit = function () {
    window.FB.init({
      appId: "4415972771856425", //replace with ur appid
      autoLogAppEvents: true,
      xfbml: true,
      version: "v7.0",
    });
  };
  }

  componentWillMount(){

  
  }

  getFacebookAccessToken() {
    const {facebookLogin} = this.props;
      window.FB.login(
        function (response) {
          if (response.status === "connected") {
            const facebookLoginRequest = {
              accessToken: response.authResponse.accessToken,
            };
            
            facebookLogin(facebookLoginRequest);
            console.log("response",response);
          } else {
            console.log(response);
          }
        },
        { scope: "email" }
      );
  
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let errors = this.state.errors;
    let emailvalid = false;
    let passvalid = false;

    this.setState({ submitted: true });
    const { email, password } = this.state;

    if (!email) {
      errors.email = "Email cannot be empty";
    } else {
      errors.email = "";
      emailvalid = true;
    }

    if (!password) {
      errors.password = "Password cannot be empty";
    } else {
      errors.password = "";
      passvalid = true;
    }

    if (emailvalid && passvalid) {
      if (validateForm(this.state.errors)) {
        <SpinnerPage />;
        this.props.login(email, password);
      }
    }

  };
  render() {
    const { errors } = this.state;
    let { isLoading } = false;
    if (this.props.loggingIn) {
      isLoading = this.props.loggingIn;
    }
    // console.log("token", this.props.confirm_token);

    return (
      <div style={{backgroundColor:"#fff", zIndex:'1'}} className="App">
           <>
        <Navbar collapseOnSelect style={{backgroundColor:'#fff', paddingRight:'5%', position:'relative'}}  expand='sm' variant='dark' fixed='top'>
                      <Container>
                      <Navbar.Brand href='/' style={{color:'#2b6777'}}> 
                        </Navbar.Brand>


                        <Navbar.Toggle arias-control='responsive-navbar-nav'> <DehazeIcon style={{color:'#222831'}}></DehazeIcon>  </Navbar.Toggle> 
                          <Navbar.Collapse id='responsive-navbar-nav'>

                            <Nav className="ms-auto">
                            <Nav.Item className="ml-auto">
                              <Nav.Link href='/login' alignContent='right' style={{color:'#222831'}}>Sign In</Nav.Link>
                              </Nav.Item>
                              <Nav.Item className="ml-auto">
                              <Nav.Link href='/register' style={{color:'#222831'}}>Sign Up</Nav.Link>
                              </Nav.Item>

                            </Nav>

                            </Navbar.Collapse>
                      </Container>
                    </Navbar>
                    </>

                    <div className="new-login-bg">
                    </div>
            
                    <div style={isLoading ? {backgroundColor:'rgba(240,84,84,0.6)', marginTop:'20vh', height:'20vh'} : {backgroundColor:'#fff'}} className="inner-login">
                    {isLoading ? (
                <ReactGifLoader></ReactGifLoader>
              ) : (
                <div>
                  <form onSubmit={this.handleSubmit} noValidate>
                    <h3 style={{color:"#222831"}}>Sign In</h3>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter email"
                        onChange={this.handleChange}
                        noValidate
                      />
                      {errors.email.length > 0 && (
                        <span className="error">{errors.email}</span>
                      )}
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Enter password"
                        onChange={this.handleChange}
                        noValidate
                      />
                      {errors.password.length > 0 && (
                        <span className="error">{errors.password}</span>
                      )}
                    </div>
                    <div className="form-group">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck1"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck1"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-light"
                    >
                      Sign in
                    </button>
                    <p className="forgot-password text-right">
                      <Link to={"/forgotPassword"}>Forgot password?</Link>
                    </p>
                  </form>


                  <button
                      type="submit"
                      className="btnFacebook"
                      onClick = {this.getFacebookAccessToken}
                    >
                      Facebook Login
                    </button>
                </div>  
              )}
                </div>
      </div>                    
    );
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        errors.password =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };
}

function mapState(state) {
  console.log("state", state.registration);
  const { loggingIn } = state.authentication;
  // const {confirm_token} = state.registration.user;
  return { loggingIn };
}

const actionCreators = {
  login: userActions.login,
  facebookLogin: userActions.facebookLogin,
  logout: userActions.logout,
};

const connectedLoginPage = connect(mapState, actionCreators)(Login);

const style = {
  margin: 15,
};

export { connectedLoginPage as Login };
