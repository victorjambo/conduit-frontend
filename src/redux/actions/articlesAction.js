import { GET_ARTICLE, FETCHING } from '../constants';
import axiosWithHeader from '../../helpers/http';


export const getArticles = () => {
  return (dispatch) => {
    dispatch({ type: FETCHING });
    return axiosWithHeader.get("/api/v1/articles/")
      .then(({ data }) => {
        dispatch(getArticlesAction(data));
      })
      .catch((error) => {console.log(error.response)});
  };
}

export const getArticlesAction = response => (
  {
    type: GET_ARTICLE,
    response,
  }
);
