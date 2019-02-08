import axios from 'axios';

const token = document.cookie.split('jwt-token=');
const axiosWithHeader = axios;
axiosWithHeader.defaults.headers.common.Authorization = token[1];
axiosWithHeader.defaults.baseURL = 'http://127.0.0.1:8000';

export default axiosWithHeader;
