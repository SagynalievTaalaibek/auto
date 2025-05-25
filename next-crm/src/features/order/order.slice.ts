import { createSlice } from '@reduxjs/toolkit';

import {
	fetchMainServices,
	fetchOneOrder,
	fetchOrdersCRM,
} from '@/features/order/order.thunks';

import { RootState } from '@/shared/store/store';
import { IMainServiceData, IOrder, OrderGetCRM } from '@/shared/types/orders';

interface OrderState {
	oneOrder: IOrder | null;
	ordersCRM: OrderGetCRM[];
	mainServices: IMainServiceData[];
	loading: boolean;
}

const initialState: OrderState = {
	oneOrder: null,
	ordersCRM: [],
	mainServices: [],
	loading: false,
};

export const orderSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchMainServices.pending, state => {
				state.loading = true;
			})
			.addCase(fetchMainServices.fulfilled, (state, action) => {
				state.loading = false;
				state.mainServices = action.payload;
			})
			.addCase(fetchMainServices.rejected, state => {
				state.loading = false;
			});

		builder
			.addCase(fetchOrdersCRM.pending, state => {
				state.loading = true;
			})
			.addCase(fetchOrdersCRM.fulfilled, (state, action) => {
				state.loading = false;
				state.ordersCRM = action.payload;
			})
			.addCase(fetchOrdersCRM.rejected, state => {
				state.loading = false;
			});

		builder
			.addCase(fetchOneOrder.pending, state => {
				state.loading = true;
			})
			.addCase(fetchOneOrder.fulfilled, (state, action) => {
				state.loading = false;
				state.oneOrder = action.payload;
			})
			.addCase(fetchOneOrder.rejected, state => {
				state.loading = false;
			});
	},
});

export const orderReducer = orderSlice.reducer;
export const selectOrdersCRM = (state: RootState) => state.orders.ordersCRM;
export const selectOneOrder = (state: RootState) => state.orders.oneOrder;
export const selectOrderLoading = (state: RootState) => state.orders.loading;

/// SERVICES
export const selectMainServices = (state: RootState) =>
	state.orders.mainServices;
