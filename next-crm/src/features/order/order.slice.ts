import { createSlice } from '@reduxjs/toolkit';

import {
	fetchOneOrder,
	fetchOneOrderUpdate,
	fetchOrdersCRM,
} from '@/features/order/order.thunks';

import { TypeOrderCRMSchema } from '@/shared/schemas';
import { RootState } from '@/shared/store/store';
import { IOrder, OrderGetCRM } from '@/shared/types/orders';

interface OrderState {
	oneOrder: IOrder | null;
	oneOrderUpdate: TypeOrderCRMSchema | null;
	ordersCRM: OrderGetCRM[];
	loading: boolean;
}

const initialState: OrderState = {
	oneOrder: null,
	oneOrderUpdate: null,
	ordersCRM: [],
	loading: false,
};

export const orderSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {},
	extraReducers: builder => {
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

		builder
			.addCase(fetchOneOrderUpdate.pending, state => {
				state.loading = true;
			})
			.addCase(fetchOneOrderUpdate.fulfilled, (state, action) => {
				state.loading = false;
				state.oneOrderUpdate = action.payload;
			})
			.addCase(fetchOneOrderUpdate.rejected, state => {
				state.loading = false;
			});
	},
});

export const orderReducer = orderSlice.reducer;
export const selectOrdersCRM = (state: RootState) => state.orders.ordersCRM;
export const selectOneOrder = (state: RootState) => state.orders.oneOrder;
export const selectOneOrderUpdate = (state: RootState) =>
	state.orders.oneOrderUpdate;
export const selectOrderLoading = (state: RootState) => state.orders.loading;
