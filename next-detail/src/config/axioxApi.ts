import axios from 'axios';
import { Store } from 'redux';

import { BASE_URL } from '@/config/constants';
import { RootState } from '@/store/store';

const axiosApi = axios.create({
	baseURL: BASE_URL,
	withCredentials: true,
});

export default axiosApi;
