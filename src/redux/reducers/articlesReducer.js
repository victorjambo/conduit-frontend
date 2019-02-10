import { GET_ARTICLE, FETCHING } from '../constants';

const initialState = {
  response: {},
  notFetching: false
};

const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        notFetching: false
      }
    case GET_ARTICLE:
      return {
        ...state,
        notFetching: true,
        response: action.response.article
      };
    default:
      return state;
  }
}

export default articlesReducer;
