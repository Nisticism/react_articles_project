const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_COMMENTS":
      return action.comments;
    case "CLEAR_COMMENTS":
      return initialState;
    case "ADD_COMMENT":
      return state.concat(action.comment);
    case "UPDATE_COMMENT":
      return state.map((comment) =>
        comment.id === action.comment.id ? action.comment : comment
      );
    case "DELETE_COMMENT":
      return state.filter((comment) =>
        comment.id === action.commentId ? false : true
      );
    default:
      return state;
  }
};
