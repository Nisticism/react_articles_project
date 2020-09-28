import React from "react";
import { createArticle } from "../actions/articles";
import { connect } from "react-redux";
import ArticleForm from "./ArticleForm";

const NewArticleFormWrapper = ({ history, createArticle }) => {
  const handleSubmit = (title, genre, content, userId) => {
    createArticle(
      {
        title: title,
        genre: genre,
        content: content,
        userId,
      },
      history
    );
  };
  return <ArticleForm history={history} handleSubmit={handleSubmit} />;
};

export default connect(null, { createArticle })(NewArticleFormWrapper);
