
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userActions } from "./../_actions/user.actions";
import "./../index.css";  // can replace the css file with your own one here.
import { Navbar, Nav, Container } from 'react-bootstrap';
import DehazeIcon from '@material-ui/icons/Dehaze';
import ReactGifLoader from "./ReactGifLoader";
import logo from './../images/logo.png';
import barcode from './../images/barcode.jpeg';
class Ticket extends Component {
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
                        <img src={logo} height="30" width="30" />
                      </Navbar.Brand>
                      <h1 style={{ color: "#222831" }}>Ticket</h1>            
                  </Container>
              </Navbar>
            </>
                    <div className="new-login-bg"></div>
                    <div
          style={
            isLoading
              ? {
                  backgroundColor: "rgba(240,84,84,0.6)",
                  marginTop: "10vh",
                  height: "20vh",
                }
              : { backgroundColor: "#a33131" }
          }
          className="inner-login"
        >
          {isLoading ? (
            <ReactGifLoader></ReactGifLoader>
          ) : (
            <>
              <div style={{ textAlign: "center", color: "#fff" }}>
                <strong>
                TICKET ID : M1478534<br /><br />
                BUS NUMBER : 1C<br />
                USERNAME : MAYANK <br />
                TICKET TYPE : ADULT<br />
                START TIME : 22-11-2021, 11:00 <br />
                END TIME : 22-11-2021, 13:00
                </strong>
                <br/><br/>
                <img src={barcode} height="40%" width="60%"></img>
              </div>
              <br/>
              <div style={{ textAlign: "center" }}>
                <b>You can use this ticket for next 5 hours.</b>
              </div>
            </>
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

const connectedLoginPage = connect(mapState, actionCreators)(Ticket);


export { connectedLoginPage as Ticket };
