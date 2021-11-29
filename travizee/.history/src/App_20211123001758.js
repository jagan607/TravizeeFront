import React, { Component } from "react";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import {Wallet} from "./components/Wallet";
import { history } from "./_helpers/history";
import { PrivateRoute } from "./components/PrivateRoute";
import { ProfileInfo } from "./components/ProfileInfo";
import { connect } from "react-redux";
import {Maps} from "./components/Maps"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { Router, Route, Switch, Redirect } from "react-router-dom";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginPage: [],
      analytics :{}
    };

    history.listen((location, action) => {

    });
  }

  componentWillMount() {
    var loginPage = [];
    loginPage.push(<Register parentContext={this} />);
    this.setState({ loginPage: loginPage });
    
  }
  


  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Switch>
            <PrivateRoute exact path="/register">
              {" "}
              
              <Register  />{" "}
            </PrivateRoute>
           
            <Route path="/login" render={(props) => (
              <Login/>
            )}/>

            <Route path="/wallet" render={(props) => (
              <Wallet />
            )}/>
            <Route path="/profile" render={(props) => (
              <ProfileInfo/>
            )}/>
            <Route path="/maps" render={(props) => (
              <Maps/>
            )}/>

            <Redirect from="*" to="/register" />
          </Switch>
        </div>
      </Router>
    );
  }
}
  

const style = {
  margin: 15,
};

function mapState(state) {
  const {  authentication } = state;
  return { authentication };
}

const actionCreators = {
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };
