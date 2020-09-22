//  synchoronous action creators

export const updateNewArticleForm = (name, value) => {
  return {
    type: "UPDATE_NEW_ARTICLE_FORM",
    formData: { name, value },
  };
};

export const resetNewArticleForm = () => {
  return {
    type: "RESET_NEW_ARTICLE_FORM",
  };
};
