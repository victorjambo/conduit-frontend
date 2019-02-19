import {
  GET_ARTICLE, FETCHING, POST_ARTICLE, GET_SINGLE_ARTICLE
} from '../constants';

const initialState = {
  response: {
    results: []
  },
  notFetching: false
};

const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
  case FETCHING:
    return {
      ...state,
      notFetching: false
    };
  case GET_ARTICLE:
    return {
      ...state,
      notFetching: true,
      response: action.response.article
    };
  case GET_SINGLE_ARTICLE:
    return {
      ...state,
      notFetching: true,
      currentArticle: action.response.article
    };
  case POST_ARTICLE:
    return {
      ...state,
      response: {
        ...state.response,
        results: [
          ...state.response.results,
          action.response.article
        ]
      }
    };
  default:
    return state;
  }
};

export default articlesReducer;
