import { GET_TIME } from '../constants';
import axios from 'axios';

export const fetchTime = (dispatch) => {
  return axios.get('/user?ID=12345')
  .then(function (response) {
    dispatch(timeAction(response.data))
  })
  .catch(function (error) {
    console.log(error);
  });
}

export const timeAction = (data) => (
  {
    type: GET_TIME,
    data,
  }
);
