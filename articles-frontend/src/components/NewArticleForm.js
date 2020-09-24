import React from "react";
import { connect } from "react-redux";
import { updateNewArticleForm } from "../actions/newArticleForm.js";
import { createArticle } from "../actions/articles.js";

const NewArticleForm = ({
  title,
  genre,
  content,
  history,
  updateNewArticleForm,
  createArticle,
  userId,
}) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    updateNewArticleForm(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createArticle(
      { title: title, genre: genre, content: content, userId, history },
      history
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        onChange={handleChange}
        value={title}
        placeholder="title"
      />
      <br />
      <input
        name="genre"
        onChange={handleChange}
        value={genre}
        placeholder="genre"
      />
      <br />
      <textarea
        name="content"
        onChange={handleChange}
        value={content}
        placeholder="content"
      />
      <br />
      <input type="submit" value="Create Article" />
    </form>
  );
};

const mapStateToProps = (state) => {
  const { title, genre, content } = state.newArticleForm;
  const userId = state.currentUser ? state.currentUser.id : "";
  return {
    title,
    genre,
    content,
    userId,
  };
};

export default connect(mapStateToProps, {
  updateNewArticleForm,
  createArticle,
})(NewArticleForm);
