import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return article ? (
    <div className="ArticleCard">
      <h4>{article.attributes.title}</h4>
      <p>{article.attributes.genre}</p>
      <p>{article.attributes.content}</p>
      <Link to={`/articles/${article.id}/edit`}>Edit Article</Link>
    </div>
  ) : (
    <p>Article not found</p>
  );
};

export default ArticleCard;
