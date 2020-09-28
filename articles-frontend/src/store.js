import { createStore, applyMiddleware, compose, combineReducers } from "redux";
//import usersReducer from "./reducers/users.js";
import currentUser from "./reducers/currentUser.js";
import loginForm from "./reducers/loginForm.js";
import signupForm from "./reducers/signupForm.js";
import articles from "./reducers/articles.js";
import articleForm from "./reducers/articleForm.js";
import comments from "./reducers/comments.js";
import commentForm from "./reducers/commentForm.js";
import thunk from "redux-thunk";

const reducer = combineReducers({
  //users: usersReducer,
  currentUser,
  loginForm,
  signupForm,
  articles,
  articleForm,
  comments,
  commentForm,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
