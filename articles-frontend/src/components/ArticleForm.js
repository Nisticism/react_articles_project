import React from "react";
import { connect } from "react-redux";
import { updateArticleForm } from "../actions/articleForm.js";
import { deleteArticle } from "../actions/articles.js";

const ArticleForm = ({
  title,
  genre,
  content,
  history,
  updateArticleForm,
  userId,
  handleSubmit,
  editMode,
  user,
  article,
  deleteArticle,
}) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    updateArticleForm(name, value);
  };
  return (
    <div className="articleForm">
      {(user &&
        article &&
        user.attributes.username === article.attributes.author.username) ||
      !editMode ? (
        <div className="successfulForm">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit(title, genre, content);
            }}
          >
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
            <br />
            <textarea
              name="content"
              onChange={handleChange}
              value={content}
              placeholder="content"
            />
            <br />
            <input
              type="submit"
              value={editMode ? "Update Article" : "Create Article"}
            />
          </form>
          {editMode ? (
            <div className="deleteButton">
              <br />
              <button
                style={{ color: "red" }}
                onClick={() => deleteArticle(article.id, history)}
              >
                Delete Article
              </button>
            </div>
          ) : null}
        </div>
      ) : (
        <p>Cannot edit this article.</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { title, genre, content } = state.articleForm;
  const userId = state.currentUser ? state.currentUser.id : "";
  return {
    title,
    genre,
    content,
    userId,
  };
};

export default connect(mapStateToProps, { updateArticleForm, deleteArticle })(
  ArticleForm
);
