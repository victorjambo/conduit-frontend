import { GET_TED } from '../constants';

const initialState = {
  message: ''
};

const TedReducer = (state = initialState, action) => {
  switch (action.type) {
  case GET_TED:
    return {
      ...state,
      message: action.message
    };
  default:
    return state;
  }
};

export default TedReducer;
