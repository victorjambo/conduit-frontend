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
    return axiosWithHeader.post("/api/v1/users/login/", user)
      .then(({ data }) => {
        dispatch(fetchArticleDetails(data));
      })
      .catch((error) => {console.log(error.response)});
  };
}


export const fetchArticleDetails = message => (
  {
    type: GET_TED,
    message,
  }
);
