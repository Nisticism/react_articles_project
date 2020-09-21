import React from "react";
import { connect } from "react-redux";
import Login from "./Login.js";
import Logout from "./Logout.js";

const NavBar = ({ currentUser }) => {
  return (
    <div className="NavBar">
      {currentUser ? (
        <strong>Welcome, {currentUser.attributes.name}</strong>
      ) : (
        ""
      )}
      <button>Log In</button>
      <button>Sign Up</button>
      {currentUser ? <Logout /> : <Login />}
    </div>
  );
};

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
  };
};

export default connect(mapStateToProps)(NavBar);
