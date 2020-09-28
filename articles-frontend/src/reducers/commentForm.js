const initialState = {
  content: "",
  // date: "",
  // like_score: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_COMMENT_FORM":
      return {
        ...state,
        [action.formData.name]: action.formData.value,
      };
    case "RESET_COMMENT_FORM":
      return initialState;
    case "SET_FORM_DATA_FOR_EDIT":
      return state;
    default:
      return state;
  }
};
