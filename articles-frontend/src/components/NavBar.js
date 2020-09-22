import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";

const NavBar = ({ currentUser, loggedIn }) => {
  return (
    <div className="NavBar">
      <NavLink exact activeClassName="active" to="/articles/my_articles">
        My Articles |{" "}
      </NavLink>
      <NavLink exact activeClassName="active" to="/articles">
        All Articles |{" "}
      </NavLink>
      <NavLink exact activeClassName="active" to="/articles/new">
        New Articles |{" "}
      </NavLink>
      {loggedIn ? (
        <>
          <p>Logged in as {currentUser.attributes.username}</p>
          <Logout />
        </>
      ) : null}
    </div>
  );
};

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser,
  };
};

export default connect(mapStateToProps)(NavBar);
