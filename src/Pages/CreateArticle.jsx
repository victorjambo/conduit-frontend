import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { postArticle } from '../redux/actions/articlesAction';


class CreateArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      body: '',
      tags: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.logChange = this.logChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, description, body } = this.state;
    const article = {
      article: { title, description, body }
    };
    this.props.postArticle(article);
  }

  logChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const {
      title, description, body, tags
    } = this.state;
    return (
      <div className="editor-page">
        <div className="container page">
          <div className="row">

            <div className="col-md-10 offset-md-1 col-xs-12">
              <form>
                <fieldset>
                  <fieldset className="form-group">
                    <input type="text" name="title" value={title} className="form-control form-control-lg" placeholder="Article Title" onChange={this.logChange} />
                  </fieldset>
                  <fieldset className="form-group">
                    <input type="text" name="description" value={description} className="form-control" placeholder="What's this article about?" onChange={this.logChange} />
                  </fieldset>
                  <fieldset className="form-group">
                    <textarea className="form-control" name="body" value={body} rows="8" placeholder="Write your article (in markdown)" onChange={this.logChange} />
                  </fieldset>
                  <fieldset className="form-group">
                    <input type="text" className="form-control" placeholder="Enter tags" name="tags" value={tags} onChange={this.logChange} />
                    <div className="tag-list" />
                  </fieldset>
                  <button className="btn btn-lg pull-xs-right btn-primary" type="button" onClick={this.handleSubmit}>
                    Publish Article
                  </button>
                </fieldset>
              </form>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articlesReducer.response,
});

const mapDispatchToProps = dispatch => ({
  postArticle: bindActionCreators(postArticle, dispatch)
});

CreateArticle.propTypes = {
  postArticle: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateArticle);
