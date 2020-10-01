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
    case "DELETE_ARTICLE_COMMENTS":
      return state.filter((article) =>
        article.id === action.articleId ? deleteArticleComments(article) : true
      );
    default:
      return state;
  }
};

function deleteArticleComments(article) {
  let new_article = Object.assign(article);
  new_article.attributes.comments = [];
  return new_article;
}
