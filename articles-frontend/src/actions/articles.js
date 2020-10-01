import { resetArticleForm } from "./articleForm";
//synch actions

export const setArticles = (articles) => {
  return {
    type: "SET_ARTICLES",
    articles,
  };
};

export const clearArticles = () => {
  return {
    type: "CLEAR_ARTICLES",
  };
};

export const addArticle = (article) => {
  return {
    type: "ADD_ARTICLE",
    article,
  };
};

export const deleteArticleSuccess = (articleId) => {
  return {
    type: "DELETE_ARTICLE",
    articleId,
  };
};

export const updateArticleSuccess = (article) => {
  return {
    type: "UPDATE_ARTICLE",
    article,
  };
};

export const deleteArticleComments = (article) => {
  return {
    type: "DELETE_ARTICLE_COMMENTS",
    article,
  };
};

//  async actions

export const getArticles = () => {
  return (dispatch) => {
    return fetch("http://localhost:3001/api/v1/articles", {
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
          dispatch(setArticles(res.data));
        }
      })
      .catch(console.log);
  };
};

export const createArticle = (articleData, history) => {
  return (dispatch) => {
    const newArticleData = {
      title: articleData.title,
      genre: articleData.genre,
      content: articleData.content,
      user_id: articleData.userId,
      like_score: 0,
    };
    return fetch("http://localhost:3001/api/v1/articles", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newArticleData),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          alert(res.error);
        } else {
          dispatch(addArticle(res.data));
          dispatch(resetArticleForm());
          history.push(`/articles/${res.data.id}`);
        }
      })
      .then(console.log);
  };
};

export const updateArticle = (articleData, history) => {
  return (dispatch) => {
    const newArticleData = {
      title: articleData.title,
      genre: articleData.genre,
      content: articleData.content,
    };
    return fetch(
      `http://localhost:3001/api/v1/articles/${articleData.articleId}`,
      {
        credentials: "include",
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newArticleData),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          alert(res.error);
        } else {
          dispatch(updateArticleSuccess(res.data));
          history.push(`/articles/${res.data.id}`);
        }
      })
      .then(console.log);
  };
};

export const deleteArticle = (articleId, history) => {
  return (dispatch) => {
    return fetch(`http://localhost:3001/api/v1/articles/${articleId}`, {
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
          dispatch(deleteArticleSuccess(articleId));
          history.push(`/user/articles`);
        }
      })
      .then(console.log);
  };
};
