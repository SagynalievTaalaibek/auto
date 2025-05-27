import { createAsyncThunk } from '@reduxjs/toolkit';

import axiosApi from '@/shared/config/axiosApi';
import { API_ROUTES } from '@/shared/constants/constants';

export const fetchMainServices = createAsyncThunk(
	'orders/fetchMainServices',
	async () => {
		const response = await axiosApi.get(API_ROUTES.MAIN_SERVICES_GET);
		return response.data;
	},
);
