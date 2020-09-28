import React from "react";
import { Link } from "react-router-dom";
import CommentForm from "./CommentForm.js";
import Comments from "./Comments.js";

const ArticleCard = ({ article, user, history }) => {
  return article ? (
    <div className="ArticleCard">
      <h3>{article.attributes.title}</h3>
      <p>
        Author: <i>{article.attributes.author.username}</i>
      </p>
      <p>
        Genre: <i>{article.attributes.genre}</i>
      </p>
      <p>
        Date: <i>{article.attributes.date}</i>
      </p>
      <br />
      <p>{article.attributes.content}</p>
      {user.attributes.username === article.attributes.author.username ? (
        <Link to={`/articles/${article.id}/edit`}>Edit Article</Link>
      ) : null}
      <br />
      <hr />
      <p>Comments</p>
      <Comments article={article} user={user} history={history} />
      <CommentForm articleId={article.id} userId={user.id} history={history} />
    </div>
  ) : (
    <p>Article not found</p>
  );
};

export default ArticleCard;
