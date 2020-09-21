import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { getCurrentUser } from "./actions/currentUser.js";
import NavBar from "./components/NavBar.js";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import Logout from "./components/Logout.js";
import Articles from "./components/Articles.js";
import MainContainer from "./components/MainContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Logout />
          <NavBar />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/articles" component={Articles} />
        </div>
      </Router>
    );
  }
}

export default connect(null, { getCurrentUser })(App);
