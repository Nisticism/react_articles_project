export default (state = [], action) => {
  switch (action.type) {
    case "SET_ARTICLES":
      return action.articles;
    case "CLEAR_ARTICLES":
      return [];
    case "ADD_ARTICLE":
      return state.articles.concat(action.articles);
    default:
      return state;
  }
};
