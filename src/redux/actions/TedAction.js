import { GET_TED } from '../constants';
import axiosWithHeader from '../../helpers/http';

const user = {
  user: {
    email: 'jake@jake.jake',
    token: 'jwt.token.here',
    username: 'jake',
    bio: 'I work at statefarm',
    image: null,
    password: 'Password1234,,'
  }
};

export const fetchArticleDetails = message => (
  {
    type: GET_TED,
    message,
  }
);

export function tedAction() {
  return dispatch => axiosWithHeader.post('/api/v1/users/login/', user)
    .then(({ data }) => {
      dispatch(fetchArticleDetails(data));
    })
    // eslint-disable-next-line no-console
    .catch((error) => { console.log(error.response); });
}
