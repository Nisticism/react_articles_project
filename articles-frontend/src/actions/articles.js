//synch actions

export const setArticles = (articles) => {
  return {
    type: "SET_ARTICLES",
    articles,
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
