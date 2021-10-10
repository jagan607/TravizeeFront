import React, { Component } from "react";
import { Login } from "./Login";
import { userActions } from "./../_actions/user.actions";
import { connect } from "react-redux";
import "./../index.css";
import DehazeIcon from "@material-ui/icons/Dehaze";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import logo from "./../logo.png";
import { Navbar, Nav, Container } from "react-bootstrap";

import ReactGifLoader from "./ReactGifLoader";


const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      type: "password",
      submitted: false,
      isLoading: false,
      errors: {
        email: "",
        password: "",
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick = () =>
    this.setState(({ type }) => ({
      type: type === "text" ? "password" : "text",
    }));

  componentWillMount() {
    
  }
  handleSubmit(event) {
    event.preventDefault();

    let errors = this.state.errors;
    let emailvalid = false;
    let passvalid = false;

    this.setState({ submitted: true, isLoading: true });

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

    if (password.length < 8) {
      errors.password = "Weak password! Password must be 8 characters long. ";
    } else {
      errors.password = "";
      passvalid = true;
    }

    if (emailvalid && passvalid) {
      if (validateForm(this.state.errors)) {
        this.props.register(email, password);
      }
    }
  }
  render() {
    const { errors } = this.state;
    let { isLoading } = false;
    if (this.props.registering) {
      isLoading = this.props.registering;
    }
    return (
      <div style={{ backgroundColor: "#fff", zIndex: "1" }} className="App">
        <>
          <Navbar
            collapseOnSelect
            style={{
              backgroundColor: "#fff",
              paddingRight: "5%",
              position: "relative",
            }}
            expand="sm"
            variant="dark"
            fixed="top"
          >
            <Container>
              <Navbar.Brand href="/" style={{ color: "#2b6777" }}>
                <img src={logo} height="60" width="90" />
              </Navbar.Brand>

              <Navbar.Toggle arias-control="responsive-navbar-nav">
                {" "}
                <DehazeIcon style={{ color: "#222831" }}></DehazeIcon>{" "}
              </Navbar.Toggle>
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Item className="ml-auto">
                    <Nav.Link
                      href="/login"
                      alignContent="right"
                      style={{ color: "#222831" }}
                    >
                      Sign In
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="ml-auto">
                    <Nav.Link href="/register" style={{ color: "#222831" }}>
                      Sign Up
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>

        <div className="new-login-bg"></div>

        <div
          style={
            isLoading
              ? {
                  backgroundColor: "rgba(240,84,84,0.6)",
                  marginTop: "20vh",
                  height: "20vh",
                }
              : { backgroundColor: "#fff" }
          }
          className="inner-login"
        >
          {isLoading ? (
            <ReactGifLoader></ReactGifLoader>
          ) : (
            <form onSubmit={this.handleSubmit}>
              <h3 style={{ color: "#222831" }}>Sign Up</h3>

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
                  type={this.state.type}
                  name="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={this.handleChange}
                  noValidate
                />
                <span className="password__show" onClick={this.handleClick}>
                  {this.state.type === "text" ? (
                    <VisibilityOffIcon />
                  ) : (
                    <VisibilityIcon />
                  )}
                </span>

                {errors.password.length > 0 && (
                  <span className="error">{errors.password}</span>
                )}
              </div>

              <button type="submit" className="btn btn-light">
                Sign Up
              </button>
              <p className="forgot-password text-right">
                Already registered? <a href="/login">Login</a>
              </p>
            </form>
          )}
        </div>
      </div>
    );
  }

  handleChange = (event) => {
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
const style = {
  margin: 15,
};

function mapState(state) {
  const { registering } = state.registration;
  return { registering };
}

const actionCreators = {
  register: userActions.register,
};

const connectedRegisterPage = connect(mapState, actionCreators)(Register);
export { connectedRegisterPage as Register };
