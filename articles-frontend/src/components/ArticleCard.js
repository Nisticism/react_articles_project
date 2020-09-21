import React from "react";

const ArticleCard = ({ article }) => {
  return (
    <div className="ArticleCard">
      <p>{article.attributes.title}</p>
      <p>{article.attributes.content}</p>
    </div>
  );
};

export default ArticleCard;
