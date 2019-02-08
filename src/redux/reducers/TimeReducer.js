import { GET_TIME } from '../constants';

const initialState = {
  data: {}
};

const TimeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TIME:
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
}

export default TimeReducer;
