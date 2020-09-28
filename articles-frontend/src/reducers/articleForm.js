const initialState = {
  content: "",
  // date: "",
  // like_score: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_ARTICLE_FORM":
      return {
        ...state,
        [action.formData.name]: action.formData.value,
      };
    case "RESET_ARTICLE_FORM":
      return initialState;
    case "SET_FORM_DATA_FOR_EDIT":
      return action.articleFormData;
    default:
      return state;
  }
};
