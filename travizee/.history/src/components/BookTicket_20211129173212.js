
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userActions } from "./../_actions/user.actions";
import "./../index.css";  // can replace the css file with your own one here.
import { Navbar, Nav, Container } from 'react-bootstrap';
import DehazeIcon from '@material-ui/icons/Dehaze';
import ReactGifLoader from "./ReactGifLoader";
import logo from './../images/logo.png';

class BookTicket extends Component {
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
                      <h1 style={{ color: "#222831" }}>Book Ticket</h1>            
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
              : { backgroundColor: "#fff" }
          }
          className="inner-login"
        >
          {isLoading ? (
            <ReactGifLoader></ReactGifLoader>
          ) : (
            <>
            <div style={{ textAlign: "left" }}>
                    <b>
                    FROM 
                        <span style={{  float: "right"}}>
                            <input type="text" placeholder="Enter source"></input>    
                        </span > <br /><br />
                    TO 
                        <span style={{  float: "right"}}>
                            <input type="text" placeholder="Enter destination"></input>    
                        </span > <br /><br />
                    START TIME 
                        <span style={{  float: "right"}}>
                            <input type="datetime-local"></input>    
                        </span > <br /><br />
                    </b><br />
            </div>
            <div style={{ textAlign: "center" }}>
                <button class="button" style={{ textAlign: "center" }}>Book Ticket</button>
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

const connectedLoginPage = connect(mapState, actionCreators)(BookTicket);


export { connectedLoginPage as BookTicket };
