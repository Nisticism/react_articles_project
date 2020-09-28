const initialState = [];

export default (state = initialState, action) => {
  console.log("in comment reducer");
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
    default:
      return state;
  }
};
