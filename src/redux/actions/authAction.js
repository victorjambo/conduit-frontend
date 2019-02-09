import { LOGIN } from '../constants';
import axiosWithHeader from '../../helpers/http';


export const loginActionRequest = (user) => {
  return (dispatch) => {
    return axiosWithHeader.post("/api/v1/users/login/", user)
      .then(({ data }) => {
        dispatch(loginAction(data));
      })
      .catch((error) => {console.log(error.response)});
  };
}


export const loginAction = data => (
  {
    type: LOGIN,
    data,
  }
);
