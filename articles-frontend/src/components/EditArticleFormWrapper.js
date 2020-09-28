import React from "react";
import { updateArticle } from "../actions/articles";
import { setFormDataForEdit, resetArticleForm } from "../actions/articleForm";
import ArticleForm from "./ArticleForm";
import { connect } from "react-redux";

class EditArticleFormWrapper extends React.Component {
  componentDidMount() {
    this.props.article && this.props.setFormDataForEdit(this.props.article);
  }

  componentDidUpdate(prevProps) {
    this.props.article &&
      !prevProps.article &&
      this.props.setFormDataForEdit(this.props.article);
  }

  componentWillUnmount() {
    this.props.resetArticleForm();
  }

  handleSubmit = (title, genre, content) => {
    const { updateArticle, article, history } = this.props;
    updateArticle(
      {
        title: title,
        genre: genre,
        content: content,
        articleId: article.id,
      },
      history
    );
  };
  render() {
    return (
      <>
        <ArticleForm
          history={this.props.history}
          user={this.props.user}
          article={this.props.article}
          editMode
          handleSubmit={this.handleSubmit}
        />
      </>
    );
  }
}

export default connect(null, {
  updateArticle,
  setFormDataForEdit,
  resetArticleForm,
})(EditArticleFormWrapper);
