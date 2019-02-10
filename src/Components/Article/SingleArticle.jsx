import React from 'react';
import { Link } from 'react-router-dom';
import hdate from 'human-date';

const SingleArticle = ({ article }) => (
  <div className="article-preview">
    <div className="article-meta">
      <Link to="/profile"><img src={article.author.image} alt="" /></Link>
      <div className="info">
        <Link to="/profile" className="author">{article.author.username}</Link>
        <span className="date">{hdate.prettyPrint(article.createdAt)}</span>
      </div>
      <button className="btn btn-outline-primary btn-sm pull-xs-right">
        <i className="ion-heart"></i> {article.avg_rating.avg_rating}
            </button>
    </div>
    <Link to="/article" className="preview-link">
      <h1>{article.title}</h1>
      <p>{article.description}</p>
      <span>Read more...</span>
    </Link>
  </div>
);

export default SingleArticle;
