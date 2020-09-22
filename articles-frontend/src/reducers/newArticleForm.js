const initialState = {
  title: "",
  genre: "",
  content: "",
  date: "",
  like_score: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_NEW_ARTICLE_FORM":
      return {
        ...state,
        [action.formData.name]: action.formData.value,
      };
    case "RESET_NEW_ARTICLE_FORM":
      return initialState;
    default:
      return state;
  }
};
