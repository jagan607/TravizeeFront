import React, { Component } from "react";
import { Register } from "./components/Register";
import { history } from "./_helpers/history";
import { PrivateRoute } from "./components/PrivateRoute";
import { connect } from "react-redux";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { Router, Route, Switch, Redirect } from "react-router-dom";

import "./App.css";

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
// injectTapEventPlugin();

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
           
            {/* <Route path="/login" render={(props) => (
              <Login/>
            )}/> */}

            {/* <Route path="/register" render={(props) => (
              <Register />
            )}/> */}

            

            <Redirect from="*" to="/" />
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
