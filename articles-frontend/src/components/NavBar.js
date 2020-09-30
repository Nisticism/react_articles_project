import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";

const NavBar = ({ currentUser, loggedIn }) => {
  return (
    <div className="NavBar">
      <div className="NavItem">
        <NavLink exact activeClassName="active" to="/user/articles">
          My Articles
        </NavLink>
      </div>
      <div className="NavItem">
        <NavLink exact activeClassName="active" to="/articles">
          All Articles
        </NavLink>
      </div>
      <div className="NavItem">
        <NavLink exact activeClassName="active" to="/articles/new">
          New Article
        </NavLink>
      </div>

      {loggedIn ? (
        <div className="NavItem">
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
          <p className="SmallText">
            (Logged in as {currentUser.attributes.username})
          </p>
          <Logout />
        </div>
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
