const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_ARTICLES":
      return action.articles;
    case "CLEAR_ARTICLES":
      return initialState;
    case "ADD_ARTICLE":
      return state.concat(action.article);
    default:
      return state;
  }
};
