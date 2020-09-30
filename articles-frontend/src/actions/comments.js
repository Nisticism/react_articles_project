import { resetCommentForm } from "./commentForm";
//synch actions

export const setComments = (comments) => {
  return {
    type: "SET_COMMENTS",
    comments,
  };
};

export const clearComments = () => {
  return {
    type: "CLEAR_COMMENTS",
  };
};

export const addComment = (comment) => {
  return {
    type: "ADD_COMMENT",
    comment,
  };
};

export const deleteCommentSuccess = (commentId) => {
  console.log("in delete comment action");
  return {
    type: "DELETE_COMMENT",
    commentId,
  };
};

export const updateCommentSuccess = (comment) => {
  return {
    type: "UPDATE_COMMENT",
    comment,
  };
};

// export const setCommentsState = (comments) => {
//   return {
//     type,
//   };
// };

//  async actions

export const getComments = () => {
  return (dispatch) => {
    return fetch("http://localhost:3001/api/v1/comments", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((res) => {
        if (res.error) {
          alert(res.error);
        } else {
          dispatch(setComments(res.data));
        }
      })
      .catch(console.log);
  };
};

export const createComment = (commentData, history) => {
  return (dispatch) => {
    const newCommentData = {
      content: commentData.content,
      article_id: commentData.articleId,
      like_score: 0,
    };
    return fetch("http://localhost:3001/api/v1/comments", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCommentData),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          alert(res.error);
        } else {
          let commentFormat = {
            id: parseInt(res.data.id),
            article_title: res.data.attributes.article_title,
            username: res.data.attributes.author.username,
            content: res.data.attributes.content,
            like_score: 0,
            date: res.data.attributes.date,
          };
          dispatch(addComment(commentFormat));
          dispatch(resetCommentForm());
          history.push(`/articles/${commentData.articleId}`);
          //window.location.reload();
        }
      })
      .then(console.log);
  };
};

export const updateComment = (commentData, history) => {
  return (dispatch) => {
    const newCommentData = {
      title: commentData.title,
      genre: commentData.genre,
      content: commentData.content,
    };
    return fetch(
      `http://localhost:3001/api/v1/comments/${commentData.commentId}`,
      {
        credentials: "include",
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCommentData),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          alert(res.error);
        } else {
          dispatch(updateCommentSuccess(res.data));
          history.push(`/comments/${res.data.id}`);
        }
      })
      .then(console.log);
  };
};

export const deleteComment = (articleId, commentId, history) => {
  return (dispatch) => {
    return fetch(`http://localhost:3001/api/v1/comments/${commentId}`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          alert(res.error);
        } else {
          dispatch(deleteCommentSuccess(commentId));
          history.push(`/articles/${articleId}`);
          //window.location.reload();
        }
      })
      .then(console.log);
  };
};
