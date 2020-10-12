import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";

const NavBar = ({ currentUser, loggedIn }) => {
  return (
    <div className="NavBar">
      <div className="NavItem">
        <NavLink exact activeClassName="active" to="/user/articles">
          <button type="button" className="NavButton">
                My Articles
          </button>
        </NavLink>
      </div>
      <div className="NavItem">
        <NavLink exact activeClassName="active" to="/articles">
          <button type="button" className="NavButton">
                All Articles
          </button>
        </NavLink>
      </div>
      <div className="NavItem">
        <NavLink exact activeClassName="active" to="/articles/new">
          <button type="button" className="NavButton">
                New Article
          </button>
        </NavLink>
      </div>
      <div className="NavItem">
        <NavLink exact activeClassName="active" to="/">
          <button type="button" className="NavButton">
                Home
          </button>
        </NavLink>
      </div>

      {loggedIn ? (
        <div className="NavItem">
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
