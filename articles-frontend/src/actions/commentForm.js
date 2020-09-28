//  synchoronous action creators

export const updateCommentForm = (name, value) => {
  return {
    type: "UPDATE_COMMENT_FORM",
    formData: { name, value },
  };
};

export const resetCommentForm = () => {
  return {
    type: "RESET_COMMENT_FORM",
  };
};

export const setFormDataForEdit = (comment) => {
  const commentFormData = {
    content: comment.attributes.content,
  };
  return {
    type: "SET_FORM_DATA_FOR_EDIT",
    commentFormData,
  };
};
