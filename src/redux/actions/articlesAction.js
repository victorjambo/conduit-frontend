/* eslint-disable no-console */
import {
  GET_ARTICLE, FETCHING, POST_ARTICLE, GET_SINGLE_ARTICLE
} from '../constants';
import axiosWithHeader from '../../helpers/http';

export const getArticlesAction = response => (
  {
    type: GET_ARTICLE,
    response,
  }
);

export const getArticles = () => (dispatch) => {
  dispatch({ type: FETCHING });
  return axiosWithHeader.get('/api/v1/articles/')
    .then(({ data }) => {
      dispatch(getArticlesAction(data));
    })
    .catch((error) => { console.log(error.response); });
};

export const postArticleAction = response => (
  {
    type: POST_ARTICLE,
    response,
  }
);

export const postArticle = article => dispatch => axiosWithHeader.post('/api/v1/articles/', article)
  .then(({ data }) => {
    dispatch(postArticleAction(data));
  })
  .catch((error) => { console.log(error); });

export const getSingleArticleAction = response => (
  {
    type: GET_SINGLE_ARTICLE,
    response,
  }
);
export const getSingleArticle = slug => (dispatch) => {
  dispatch({ type: FETCHING });
  return axiosWithHeader.get(`/api/v1/articles/${slug}`)
    .then(({ data }) => {
      dispatch(getSingleArticleAction(data));
    })
    .catch((error) => { console.log(error.response); });
};
