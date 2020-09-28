import React from "react";
import Articles from "./Articles.js";

const MainContainer = ({ user }) => {
  return (
    <div className="MainContainer">
      {user ? (
        <div className="UserInfo">
          <p>Welcome, {user.attributes.username}</p>
          <p>Your name is {user.attributes.name}</p>
          <p>Your email is {user.attributes.email}</p>
        </div>
      ) : null}
    </div>
  );
};

export default MainContainer;
