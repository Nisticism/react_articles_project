import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { getCurrentUser } from "./actions/currentUser.js";
import NavBar from "./components/NavBar.js";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import Home from "./components/Home.js";
import NewArticleForm from "./components/NewArticleForm.js";
import Articles from "./components/Articles.js";
//import MainContainer from "./components/MainContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    const { loggedIn } = this.props;
    return (
      <Router>
        <div className="App">
          {loggedIn ? <NavBar /> : <Home />}
          <Switch>
            <Route
              exact
              path="/signup"
              render={(props) => <Signup history={props.history} />}
            />
            <Route exact path="/login" component={Login} />
            <Route exact path="/articles" component={Articles} />
            <Route exact path="/articles/new" component={NewArticleForm} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: !!state.currentUser,
  };
};

export default connect(mapStateToProps, { getCurrentUser })(App);
