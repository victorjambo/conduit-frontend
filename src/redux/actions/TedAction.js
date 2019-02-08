import { GET_TED } from '../constants';
import axiosWithHeader from '../../helpers/http';

const user = {
  user: {
    email: "jake@jake.jake",
    token: "jwt.token.here",
    username: "jake",
    bio: "I work at statefarm",
    image: null,
    password: "Password1234,,"
  }
}

export function tedAction() {
  return function(dispatch) {
    return axiosWithHeader.poast("/api/v1/users/", user)
      .then(({ data }) => {
      dispatch(fetchArticleDetails(data));
    });
  };
}


export const fetchArticleDetails = message => (
  {
    type: GET_TED,
    message,
  }
);
