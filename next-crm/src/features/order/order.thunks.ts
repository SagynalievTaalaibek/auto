import { createAsyncThunk } from '@reduxjs/toolkit';

import axiosApi from '@/shared/config/axiosApi';
import { API_ROUTES } from '@/shared/constants/constants';
import { IOrder, OrderGetCRM } from '@/shared/types/orders';

export const fetchMainServices = createAsyncThunk(
	'orders/fetchMainServices',
	async () => {
		const response = await axiosApi.get(API_ROUTES.MAIN_SERVICES);
		return response.data;
	},
);

export const fetchOrdersCRM = createAsyncThunk(
	'orders/fetchOrdersCRM',
	async () => {
		const response = await axiosApi.get<OrderGetCRM[]>(
			API_ROUTES.ORDER_GET_CRM,
		);
		return response.data;
	},
);

export const fetchOneOrder = createAsyncThunk<IOrder, string>(
	'orders/fetchOneOrder',
	async id => {
		const response = await axiosApi.get<IOrder>(
			`${API_ROUTES.ORDER_GET_ONE}/${id}`,
		);
		return response.data;
	},
);
