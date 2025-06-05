import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';

import axiosApi from '../../shared/config/axiosApi.ts';
import { API_ROUTES } from '../../shared/constants/constants.ts';
import type { TypeOrderProfileSchema } from '../../shared/schemas';
import type { ErrorResponse } from '../../shared/types/error.ts';
import type { OrderGetProfile } from '../../shared/types/orders.ts';

export const fetchOrderProfile = createAsyncThunk(
	'orders/fetchOrderGetProfile',
	async () => {
		const response = await axiosApi.get<OrderGetProfile[]>(
			API_ROUTES.ORDER_GET_PROFILE,
		);
		return response.data;
	},
);

export const createOrderClient = createAsyncThunk(
	'orders/createOrderClient',
	async (data: TypeOrderProfileSchema, { rejectWithValue }) => {
		try {
			const order = await axiosApi.post(API_ROUTES.CREATE_ORDER_CLIENT, {
				...data,
				carYear: String(data.carYear),
			});
			return order.data;
		} catch (error: unknown) {
			const axiosError = error as AxiosError<ErrorResponse>;

			return rejectWithValue(
				axiosError.response?.data?.message || 'CREATE ORDER FAILED',
			);
		}
	},
);
