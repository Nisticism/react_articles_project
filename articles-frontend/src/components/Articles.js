import React from "react";
import ArticleCard from "./ArticleCard.js";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Articles = (props) => {
  console.log(props.userArticles);
  const articles = props.userArticles ? props.userArticles : props.articles;
  console.log(props.articles);

  const articleCards =
    articles.length > 0
      ? articles.map((a) => (
          <>
            <Link to={`/articles/${a.id}`}>{a.attributes.title}</Link>
            <br />
          </>
        ))
      : [];
  return articleCards;
};

const mapStateToProps = ({ articles }) => {
  return {
    articles,
  };
};

export default connect(mapStateToProps)(Articles);
