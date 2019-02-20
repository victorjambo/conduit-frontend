import { LOGIN } from '../constants';
import axiosWithHeader from '../../helpers/http';

export const loginAction = data => (
  {
    type: LOGIN,
    data,
  }
);

export const loginActionRequest = user => dispatch => axiosWithHeader.post('/api/users/login/', user)
  .then(({ data }) => {
    dispatch(loginAction(data));
  })
  // eslint-disable-next-line no-console
  .catch((error) => { console.log(error.response); });
