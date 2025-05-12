import axios from 'axios';

import { BASE_URL } from '@/config/constants';

const axiosApi = axios.create({
	baseURL: BASE_URL,
	withCredentials: true,
});

/*export const addInterceptors = (store: Store<RootState>) => {
	axiosApi.interceptors.request.use((config) => {
		const token = store.getState().users.user?.token;

		config.headers.set('Authorization', token ? 'Bearer ' + token : undefined);

		return config;
	});
};*/

export default axiosApi;
