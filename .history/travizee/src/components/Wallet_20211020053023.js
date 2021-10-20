
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userActions } from "./../_actions/user.actions";
import "./../index.css";  // can replace the css file with your own one here.
import SpinnerPage from "./SpinnerPage";
import ReactGifLoader from "./ReactGifLoader";
import Swal from "sweetalert2";
import { Navbar, Nav, Container } from 'react-bootstrap';
import DehazeIcon from '@material-ui/icons/Dehaze';

class Wallet extends Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
    }

    render(){

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
