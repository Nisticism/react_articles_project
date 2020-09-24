import newArticleForm from "../reducers/newArticleForm";
import { resetNewArticleForm } from "./newArticleForm";
//synch actions

export const setArticles = (articles) => {
  return {
    type: "SET_ARTICLES",
    articles,
  };
};

export const clearArticles = () => {
  return {
    type: "CLEAR_TRIPS",
  };
};

export const addArticle = (article) => {
  return {
    type: "ADD_ARTICLE",
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

export const getMyArticles = () => {
  return (dispatch) => {
    return fetch("http://localhost:3001/api/v1/articles/my_articles", {
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
          dispatch(resetNewArticleForm());
          history.push(`/articles/${res.data.id}`);
        }
      })
      .then(console.log);
  };
};
