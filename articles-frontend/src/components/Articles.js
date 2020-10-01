import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Articles = (props) => {
  const articles = props.userArticles ? props.userArticles : props.articles;

  const articleCards =
    articles.length > 0 ? (
      articles.map((a, index) => (
        <div key={a.id} className="ArticleListItem">
          <hr />
          <div className="index">{index + 1}</div>
          <Link to={`/articles/${a.id}`}>{a.attributes.title}</Link>
          <div id="genreAuthor">
            Genre: {a.attributes.genre} | Author: {a.attributes.author.username}
          </div>
        </div>
      ))
    ) : (
      <div className="emptyArticlesList">
        <br />
        {[]}
      </div>
    );
  return (
    <div>
      <h3>{props.articlesTitle}</h3>
      {articleCards}
    </div>
  );
};

const mapStateToProps = ({ articles }) => {
  return {
    articles,
  };
};

export default connect(mapStateToProps)(Articles);
