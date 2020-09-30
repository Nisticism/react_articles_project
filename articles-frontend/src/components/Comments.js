import React from "react";
import { connect } from "react-redux";
import CommentCard from "./CommentCard.js";
import { setComments } from "../actions/comments.js";

class Comments extends React.Component {
  //= ({ user, article, history }) => {

  componentDidMount() {
    this.props.article.attributes.comments &&
      this.props.setComments(this.props.article.attributes.comments);
  }

  componentDidUpdate(prevProps) {
    this.props.comments &&
      prevProps.comments !== this.props.comments &&
      this.forceUpdate();
  }

  componentWillUnmount() {
    //this.props.resetArticleForm();
  }

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

export default connect(mapStateToProps, { setComments })(Comments);
