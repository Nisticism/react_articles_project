import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Articles extends React.Component {

  constructor(props) {
    super()
    console.log(props)
    
    this.state = {
      likeScore: []
    }

    this.handleLikeClick = this.handleLikeClick.bind(this)
  }

  handleLikeClick(event) {
    console.log(event.target.id)
    const likeList = [...this.state.likeScore]
    let newIndex;
    if (likeList[event.target.id] === 1) {
      newIndex = 0
    } else {
      newIndex = 1
    }
    likeList[event.target.id] = newIndex

    this.setState({
      likeScore: likeList
    });
  }

  componentDidMount() {
  }

  render() {

    const articles = this.props.userArticles ? this.props.userArticles : this.props.articles;

    if (articles.length > 0) {
    console.log(this.state)
    const articleCards =
    articles.length > 0 ? (
      articles.map((a, index) => (
        <div key={a.id} className="ArticleListItem">
          <hr />
          <div id="indexer" className="index">{index + 1}</div>
          <Link to={`/articles/${a.id}`}>{a.attributes.title}</Link>
          <br/>
          <button onClick={(event) => this.handleLikeClick(event)} className="LikeButton" id={index}>Like</button>
          <p>Score: {this.state.likeScore[index] ? this.state.likeScore[index] : 0}</p>

          <div id="genre">
            Genre: {a.attributes.genre}
          </div>

          {this.props.userArticles ? null : (
            <div id="author">
            Author: {a.attributes.author.username}
          </div>)
          }
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
        <h3>{this.props.articlesTitle}</h3>
        {articleCards}
      </div>
    );
    } else {
      return null
    }
  }

    

};

const mapStateToProps = ({ articles }) => {
  return {
    articles,
  };
};

export default connect(mapStateToProps)(Articles);
