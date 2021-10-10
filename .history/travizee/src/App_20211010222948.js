import React, { Component } from "react";
import Loginscreen from "./components/Loginscreen";
import { ConfirmEmail } from "./components/ConfirmEmail";
import Home from "./components/home/Home";
import { CreateProfile } from "./components/CreateProfile";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { history } from "./_helpers/history";
import { alertActions } from "./_actions/alert.actions";
import { PrivateRoute } from "./components/PrivateRoute";
import { connect } from "react-redux";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword";
import RequestPage from "./components/requestRefer/RequestPage.js";

import ResetPassword from "./components/ResetPassword";
import NewProfile from "./components/profile/NewProfile";
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
      // clear alert on location change
      this.props.clearAlerts();
    });
  }

  componentWillMount() {
    var loginPage = [];
    loginPage.push(<Loginscreen parentContext={this} />);
    this.setState({ loginPage: loginPage });
    const firebaseConfig = {
      apiKey: "AIzaSyCtp4RsWJxcVia37N1lEoxa2BrxHzkBMHI",
      authDomain: "refer-me-c7e83.firebaseapp.com",
      projectId: "refer-me-c7e83",
      storageBucket: "refer-me-c7e83.appspot.com",
      messagingSenderId: "998762404612",
      appId: "1:998762404612:web:6d473288a104d0f72a0e51",
      measurementId: "G-HPYPDGH1R5"
    };

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    // logEvent(analytics, 'screen_view', {
    //   firebase_screen: 'Refer', 
    //   firebase_screen_class: 'Home'
    // });
    this.setState({analytics:analytics});
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
  const { alert, authentication } = state;
  return { alert, authentication };
}

const actionCreators = {
  clearAlerts: alertActions.clear,
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };
