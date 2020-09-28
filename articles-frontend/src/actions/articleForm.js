//  synchoronous action creators

export const updateArticleForm = (name, value) => {
  return {
    type: "UPDATE_ARTICLE_FORM",
    formData: { name, value },
  };
};

export const resetArticleForm = () => {
  return {
    type: "RESET_ARTICLE_FORM",
  };
};

export const setFormDataForEdit = (article) => {
  const articleFormData = {
    title: article.attributes.title,
    genre: article.attributes.genre,
    content: article.attributes.content,
  };
  return {
    type: "SET_FORM_DATA_FOR_EDIT",
    articleFormData,
  };
};
