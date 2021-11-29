import React, { Component } from "react";
import './ProfileInfoResources/ProfileInfo.css'
import { userActions } from "./../_actions/user.actions";
import { connect } from "react-redux";
import { Navbar, Nav, Container } from "react-bootstrap";
import DehazeIcon from '@material-ui/icons/Dehaze';
import logo from './../images/logo.png'


class ProfileInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email:'jaganmohan@uwindsor.ca',
          fullName : 'Jagan Mohan',
          mobile : '+91 9003757281',
          profilePic:'https://api.unsplash.com/search/photos?query=people',
          userName:'jagan97'
        };
      }

    render() {
        return <div>
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
              <img src={logo} height="30" width="30" />
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
        <div class="profile_info">
            <h1>Profile</h1>
            {/* <Card /> */}
            <div class="user-card">
            <div class="circle circle-left"></div> 
            <img src={this.state.profilePic} onError='https://www.w3schools.com/howto/img_avatar.png' alt="Avatar" class="profile_image" />
            <div class="container">
                <h4><b>{this.state.userName}</b></h4>
                <p>@{this.state.userName}</p>
            </div>
            <div class="circle circle-right"></div>
        </div>
            <p>{this.state.email}</p>
            <p>+1 234 56789</p>
            <button class="button">Update</button>
            <div class="profie_info_navbar">
                <a href="#option1">Ticket</a>
                <a href="#wallet">Wallet</a>
                <a href="#user">Profile</a>
            </div>
        </div>;
        </div>
    }
}

function mapState(state) {
    const { user } = state.authentication;
    return { user };
  }
  
  const actionCreators = {
    register: userActions.register,
  };
  
  const connectedRegisterPage = connect(mapState, actionCreators)(ProfileInfo);
  export { connectedRegisterPage as ProfileInfo };