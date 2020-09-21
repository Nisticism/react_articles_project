import React from "react";
import ArticleCard from "./ArticleCard.js";
import { connect } from "react-redux";

const Articles = (props) => {
  const articleCards =
    props.articles.length > 0
      ? props.articles.map((a) => <ArticleCard article={a} key={a.id} />)
      : [];
  return articleCards;
};

const mapStateToProps = ({ articles }) => {
  return {
    articles,
  };
};

export default connect(mapStateToProps)(Articles);
