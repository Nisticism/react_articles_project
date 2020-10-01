import React from "react";
import { connect } from "react-redux";
import { updateCommentForm } from "../actions/commentForm.js";
import { updateComment } from "../actions/comments";
import { createComment } from "../actions/comments";

const CommentForm = ({
  content,
  history,
  updateCommentForm,
  createComment,
  updateComment,
  userId,
  editMode,
  user,
  comment,
  articleId,
}) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    updateCommentForm(name, value);
  };

  const handleSubmit = (content, userId, articleId, editMode) => {
    console.log("in comment submit");
    !editMode
      ? createComment(
          {
            content: content,
            userId,
            articleId,
          },
          history
        )
      : updateComment(
          {
            content: content,
            userId,
            articleId,
          },
          history
        );
  };

  return (
    <div className="commentForm">
      {(user &&
        comment &&
        user.attributes.username === comment.attributes.author.username) ||
      !editMode ? (
        <div className="successfulForm">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit(content, userId, articleId, editMode);
            }}
          >
            <br />
            <textarea
              name="content"
              onChange={handleChange}
              value={content}
              placeholder="Write comment..."
            />
            <br />
            <input
              type="submit"
              value={editMode ? "Update Comment" : "Post Comment"}
            />
          </form>
        </div>
      ) : (
        <p>Cannot edit this comment.</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { content } = state.commentForm;
  const userId = state.currentUser ? state.currentUser.id : "";
  return {
    content,
    userId,
  };
};

export default connect(mapStateToProps, {
  createComment,
  updateComment,
  updateCommentForm,
})(CommentForm);
