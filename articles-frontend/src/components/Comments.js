import React from "react";
import { connect } from "react-redux";
import CommentCard from "./CommentCard.js";
import { setComments } from "../actions/comments.js";
import { updateArticleComments } from "../actions/articles.js";

class Comments extends React.Component {
  componentDidMount() {
    this.props.article.attributes.comments &&
      this.props.setComments(this.props.article.attributes.comments);
  }

  componentDidUpdate(prevProps) {
    this.props.comments &&
      prevProps.comments !== this.props.comments &&
      this.props.updateArticleComments(
        this.props.article.id,
        this.props.comments
      ) &&
      this.forceUpdate();
  }

  componentWillUnmount() {}

  render() {
    let allProps = this.props;
    function commentCards() {
      return allProps.article &&
        allProps.comments &&
        allProps.comments.length > 0
        ? allProps.comments.map((c) => (
            <div key={c.id} className="CommentListItem">
              <CommentCard
                comment={c}
                user={allProps.user}
                history={allProps.history}
                articleId={allProps.article.id}
              />
            </div>
          ))
        : [];
    }

    return commentCards();
  }
}

const mapStateToProps = ({ comments }) => {
  return {
    comments,
  };
};

export default connect(mapStateToProps, { setComments, updateArticleComments })(
  Comments
);
