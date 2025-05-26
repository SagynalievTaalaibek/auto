import { createAsyncThunk } from '@reduxjs/toolkit';

import axiosApi from '@/shared/config/axiosApi';
import { API_ROUTES } from '@/shared/constants/constants';
import { TypeOrderCRMSchema } from '@/shared/schemas';
import { IOrder, OrderGetCRM } from '@/shared/types/orders';

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

export const fetchOneOrderUpdate = createAsyncThunk<TypeOrderCRMSchema, string>(
	'orders/fetchOneOrderUpdate',
	async id => {
		const response = await axiosApi.get<TypeOrderCRMSchema>(
			`${API_ROUTES.ORDER_GET_ONE}/${id}?update=true`,
		);
		return response.data;
	},
);
