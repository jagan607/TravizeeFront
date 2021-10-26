
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userActions } from "./../_actions/user.actions";
import "./../index.css";  // can replace the css file with your own one here.
import { Navbar, Nav, Container } from 'react-bootstrap';
import DehazeIcon from '@material-ui/icons/Dehaze';
import ReactGifLoader from "./ReactGifLoader";
class Wallet extends Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
    }

    render(){
      const { errors } = this.state;
      let { isLoading } = false;
        return(
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

    
}

function mapState(state) {
    console.log("state", state);
    //can retrievce the variables in the respective reducer here.
    return {  };
  }
  
  const actionCreators = {
      //get the api methods in user.action.js file
  };

const connectedLoginPage = connect(mapState, actionCreators)(Wallet);


export { connectedLoginPage as Wallet };
