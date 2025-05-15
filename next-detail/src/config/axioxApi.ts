import axios from 'axios';

import { BASE_URL } from '@/config/constants';

const axiosApi = axios.create({
	baseURL: BASE_URL,
	withCredentials: true,
});

export default axiosApi;
