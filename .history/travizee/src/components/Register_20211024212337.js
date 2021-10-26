import React, { Component } from "react";
// import { Login } from "./Login";
import { userActions } from "./../_actions/user.actions";
import { connect } from "react-redux";
import "./../index.css";
import DehazeIcon from "@material-ui/icons/Dehaze";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
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
                {/* <img src={logo} height="60" width="90" /> */}
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

        <div>
	
	      <svg xmlns="http://www.w3.org/2000/svg" viewBox="230 55 150 120" style="height: 620px; width: 100%">
          <path fill="#488DF4" fill-opacity="1" d="M0,64L6.2,96C12.3,128,25,192,37,192C49.2,192,62,128,74,128C86.2,128,98,192,111,197.3C123.1,203,135,149,148,149.3C160,149,172,203,185,229.3C196.9,256,209,256,222,218.7C233.8,181,246,107,258,96C270.8,85,283,139,295,133.3C307.7,128,320,64,332,69.3C344.6,75,357,149,369,181.3C381.5,213,394,203,406,197.3C418.5,192,431,192,443,165.3C455.4,139,468,85,480,80C492.3,75,505,117,517,144C529.2,171,542,181,554,186.7C566.2,192,578,192,591,197.3C603.1,203,615,213,628,202.7C640,192,652,160,665,128C676.9,96,689,64,702,53.3C713.8,43,726,53,738,64C750.8,75,763,85,775,90.7C787.7,96,800,96,812,101.3C824.6,107,837,117,849,117.3C861.5,117,874,107,886,128C898.5,149,911,203,923,240C935.4,277,948,299,960,277.3C972.3,256,985,192,997,138.7C1009.2,85,1022,43,1034,32C1046.2,21,1058,43,1071,74.7C1083.1,107,1095,149,1108,144C1120,139,1132,85,1145,90.7C1156.9,96,1169,160,1182,170.7C1193.8,181,1206,139,1218,101.3C1230.8,64,1243,32,1255,64C1267.7,96,1280,192,1292,197.3C1304.6,203,1317,117,1329,85.3C1341.5,53,1354,75,1366,101.3C1378.5,128,1391,160,1403,160C1415.4,160,1428,128,1434,112L1440,96L1440,0L1433.8,0C1427.7,0,1415,0,1403,0C1390.8,0,1378,0,1366,0C1353.8,0,1342,0,1329,0C1316.9,0,1305,0,1292,0C1280,0,1268,0,1255,0C1243.1,0,1231,0,1218,0C1206.2,0,1194,0,1182,0C1169.2,0,1157,0,1145,0C1132.3,0,1120,0,1108,0C1095.4,0,1083,0,1071,0C1058.5,0,1046,0,1034,0C1021.5,0,1009,0,997,0C984.6,0,972,0,960,0C947.7,0,935,0,923,0C910.8,0,898,0,886,0C873.8,0,862,0,849,0C836.9,0,825,0,812,0C800,0,788,0,775,0C763.1,0,751,0,738,0C726.2,0,714,0,702,0C689.2,0,677,0,665,0C652.3,0,640,0,628,0C615.4,0,603,0,591,0C578.5,0,566,0,554,0C541.5,0,529,0,517,0C504.6,0,492,0,480,0C467.7,0,455,0,443,0C430.8,0,418,0,406,0C393.8,0,382,0,369,0C356.9,0,345,0,332,0C320,0,308,0,295,0C283.1,0,271,0,258,0C246.2,0,234,0,222,0C209.2,0,197,0,185,0C172.3,0,160,0,148,0C135.4,0,123,0,111,0C98.5,0,86,0,74,0C61.5,0,49,0,37,0C24.6,0,12,0,6,0L0,0Z">
            </path>
            </svg>
	</div>

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
