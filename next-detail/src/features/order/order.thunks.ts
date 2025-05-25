import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import axiosApi from '@/shared/config/axioxApi';
import { API_ROUTES } from '@/shared/constants/constants';
import { TypeOrderSchema } from '@/shared/schemas';
import { ErrorResponse } from '@/shared/types/error';
import { OrderGetProfile } from '@/shared/types/orders';

export const fetchMainServices = createAsyncThunk(
	'orders/fetchMainServices',
	async () => {
		const response = await axiosApi.get(API_ROUTES.MAIN_SERVICES);
		return response.data;
	},
);

export const fetchOrderProfile = createAsyncThunk(
	'orders/fetchOrderById',
	async () => {
		const response = await axiosApi.get<OrderGetProfile[]>(
			API_ROUTES.ORDER_GET_PROFILE,
		);
		return response.data;
	},
);

export const createOrder = createAsyncThunk(
	'orders/createOrder',
	async (data: TypeOrderSchema, { rejectWithValue }) => {
		try {
			const order = await axiosApi.post(API_ROUTES.CREATE_ORDER, {
				...data,
				carYear: String(data.carYear),
			});
			return order.data;
		} catch (error: unknown) {
			const axiosError = error as AxiosError<ErrorResponse>;

			return rejectWithValue(
				axiosError.response?.data?.message || 'Register failed',
			);
		}
	},
);
