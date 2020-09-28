import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteComment } from "../actions/comments.js";

const CommentCard = ({ comment, user, deleteComment, history, articleId }) => {
  console.log(comment);
  console.log(user);
  return comment ? (
    <div className="CommentCard">
      <p>
        User: <i>{comment.username}</i>
      </p>
      <p>
        Date: <i>{comment.date}</i>
      </p>
      <br />
      <p>Content: {comment.content}</p>
      {user.attributes.username === comment.username ? (
        <div className="deleteEdit">
          {/* <Link to={`/comments/${comment.id}/edit`}>Edit Comment |</Link> */}
          <div className="deleteButton">
            <button
              style={{ color: "red" }}
              onClick={() => {
                console.log(comment);
                deleteComment(articleId, comment.id, history);
                console.log("here");
              }}
            >
              Delete Comment
            </button>
          </div>
        </div>
      ) : null}
    </div>
  ) : (
    <p>Comment not found</p>
  );
};

export default connect(null, { deleteComment })(CommentCard);
