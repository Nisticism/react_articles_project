const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_ARTICLES":
      return action.articles;
    case "CLEAR_ARTICLES":
      return initialState;
    case "ADD_ARTICLE":
      return state.concat(action.article);
    case "UPDATE_ARTICLE":
      return state.map((article) =>
        article.id === action.article.id ? action.article : article
      );
    case "DELETE_ARTICLE":
      return state.filter((article) =>
        article.id === action.articleId ? false : true
      );
    case "DELETE_COMMENT":
      console.log("in delete comment");
      return state.map((article) =>
        article.id === action.articleId ? mapComments(article, action) : article
      );
    default:
      return state;
  }
};

const mapComments = (article, action) => {
  console.log("mapping comments...");
  let new_object = Object.assign(article);
  const comments = article.attributes.comments.filter(
    (comment) => comment.id !== action.commentId
  );

  new_object.attributes.comments = comments;
  return new_object;
};
