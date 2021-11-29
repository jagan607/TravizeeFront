import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userActions } from "./../_actions/user.actions";
import "./../index.css";  // can replace the css file with your own one here.
import { Navbar, Nav, Container } from 'react-bootstrap';
import DehazeIcon from '@material-ui/icons/Dehaze';
import ReactGifLoader from "./ReactGifLoader";
import logo from './../images/logo.png'
class Wallet extends Component {
    constructor(props) {
      super(props);
      this.state = {
        credit:'400',
        balance : '250',
        isAdd : false,
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {
        this.setState({isAdd : true}, ()=> {
          
        })
    };

    handleChange = (e) => {

    };
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
                      <h1 style={{ color: "#222831" }}>Wallet</h1>            
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
           
              <h3 style={{ color: "#222831", textAlign: "center" }}><b>$ <span>{this.state.balance}</span></b></h3>
              {this.state.isAdd ? <div>
                <input
                        type="text"
                        name="amount"
                        className="form-control"
                        placeholder="Enter Amount"
                        onChange={this.handleChange}
                        noValidate
                      />

              </div> : 
              <div>
              <div style={{ color: "rgb(202,200,200)" }}>
                ** ** ** 5294<br />
                Expires<br />
                07/22 <br />
              </div>
              <br/>
              <br/>
              <h3 style={{ color: "#222831", fontSize:20, }}><b>Recent Bookings</b></h3>
              <div style={{ textAlign: "left" }}>
                    <b>
                    General <span style={{ color: "red", float: "right"}}>-$75</span > <br />
                    General <span style={{ color: "red", float: "right"}}>-$75</span> <br />
                    Credit <span style={{ color: "green", float: "right"}}>+$ <span>{this.state.credit}</span></span> <br />
                    </b>
              </div>
              <br/>
              </div>
          }
              <div style={{ textAlign: "center" }}>
                <button class="button" onSubmit={this.handleSubmit} style={{ textAlign: "center" }}>Add Money</button>
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

const connectedWallet = connect(mapState, actionCreators)(Wallet);


export { connectedWallet as Wallet };