import React from "react";
import { connect } from "react-redux";
import CommentCard from "./CommentCard.js";

const Comments = ({ user, article, history }) => {
  const commentCards =
    article.attributes.comments.length > 0
      ? article.attributes.comments.map((c) => (
          <div key={c.id} className="CommentListItem">
            <CommentCard
              comment={c}
              user={user}
              history={history}
              articleId={article.id}
            />
          </div>
        ))
      : [];
  return commentCards;
};

const mapStateToProps = ({ comments }) => {
  return {
    comments,
  };
};

export default connect(mapStateToProps)(Comments);
