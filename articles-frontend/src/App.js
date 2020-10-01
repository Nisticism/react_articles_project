import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { getCurrentUser } from "./actions/currentUser.js";
import MainContainer from "./components/MainContainer.js";
import NavBar from "./components/NavBar.js";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import Home from "./components/Home.js";
import Articles from "./components/Articles.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ArticleCard from "./components/ArticleCard";
import { setFormDataForEdit } from "./actions/articleForm.js";
import NewArticleFormWrapper from "./components/NewArticleFormWrapper.js";
import EditArticleFormWrapper from "./components/EditArticleFormWrapper.js";

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    const { loggedIn, articles, user, setFormDataForEdit } = this.props;
    return (
      <Router>
        <div className="App">
          {loggedIn ? <NavBar /> : <Home />}
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <MainContainer user={user} />}
            />
            <Route
              exact
              path="/signup"
              render={(props) => <Signup history={props.history} />}
            />
            <Route exact path="/login" component={Login} />
            <Route
              exact
              path="/articles"
              render={(props) => <Articles articlesTitle={"Articles"} />}
            />
            <Route
              exact
              path="/user/articles"
              component={(props) => {
                const userArticles = articles.filter(
                  (article) =>
                    article.attributes.author.username ===
                    user.attributes.username
                );
                return (
                  <Articles
                    userArticles={userArticles}
                    articlesTitle={"My Articles"}
                    {...props}
                  />
                );
              }}
            />
            <Route
              exact
              path="/articles/new"
              component={NewArticleFormWrapper}
            />
            <Route
              exact
              path="/articles/:id"
              render={(props) => {
                const article = articles.find(
                  (article) => article.id === props.match.params.id
                );
                return (
                  <ArticleCard
                    article={article}
                    user={user}
                    history={props.history}
                    {...props}
                  />
                );
              }}
            />
            <Route
              exact
              path="/articles/:id/edit"
              render={(props) => {
                const article = articles.find(
                  (article) => article.id === props.match.params.id
                );
                article && setFormDataForEdit(article);
                return (
                  <EditArticleFormWrapper
                    article={article}
                    user={user}
                    {...props}
                  />
                );
              }}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: !!state.currentUser,
    user: state.currentUser,
    articles: state.articles,
  };
};

export default connect(mapStateToProps, { getCurrentUser, setFormDataForEdit })(
  App
);
