import axios from 'axios';

// const token = document.cookie.split('jwt-token=');
// eslint-disable-next-line no-undef
const token = localStorage.getItem('token');
const axiosWithHeader = axios;
if (token) {
  axiosWithHeader.defaults.headers.common.Authorization = `Token ${token}`;
}
axiosWithHeader.defaults.baseURL = 'http://127.0.0.1:8000';

export default axiosWithHeader;
