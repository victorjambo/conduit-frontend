import axios from 'axios';
import { GET_TIME } from '../constants';

export const timeAction = data => (
  {
    type: GET_TIME,
    data,
  }
);

export const fetchTime = dispatch => axios.get('/user?ID=12345')
  .then((response) => {
    dispatch(timeAction(response.data));
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.log(error);
  });
