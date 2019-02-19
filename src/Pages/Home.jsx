import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import SingleArticle from '../Components/Article/SingleArticle';
import { getArticles } from '../redux/actions/articlesAction';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    const { getArticlesProp } = this.props;
    getArticlesProp();
  }

  render() {
    const { notFetching, articles } = this.props;
    return (
      <div className="home-page">

        <div className="banner">
          <div className="container">
            <h1 className="logo-font">Authors Haven</h1>
            <p>A place to share your knowledge.</p>
          </div>
        </div>

        <div className="container page">
          <div className="row">

            <div className="col-md-9">
              <div className="feed-toggle">
                <ul className="nav nav-pills outline-active">
                  <li className="nav-item">
                    <Link className="nav-link disabled" to="/">Your Feed</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/">Global Feed</Link>
                  </li>
                </ul>
              </div>

              {notFetching && articles.results.map(
                article => <SingleArticle article={article} key={article.slug} />
              )}

            </div>

            <div className="col-md-3">
              <div className="sidebar">
                <p>Popular Tags</p>

                <div className="tag-list">
                  <Link to="/" className="tag-pill tag-default">programming</Link>
                  <Link to="/" className="tag-pill tag-default">javascript</Link>
                  <Link to="/" className="tag-pill tag-default">emberjs</Link>
                  <Link to="/" className="tag-pill tag-default">angularjs</Link>
                  <Link to="/" className="tag-pill tag-default">react</Link>
                  <Link to="/" className="tag-pill tag-default">mean</Link>
                  <Link to="/" className="tag-pill tag-default">node</Link>
                  <Link to="/" className="tag-pill tag-default">rails</Link>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articlesReducer.response,
  notFetching: state.articlesReducer.notFetching
});

const mapDispatchToProps = dispatch => ({
  getArticlesProp: bindActionCreators(getArticles, dispatch)
});

Home.propTypes = {
  getArticlesProp: PropTypes.func,
  articles: PropTypes.arrayOf,
  notFetching: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
