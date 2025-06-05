import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../../app/store/store.ts';
import type { OrderGetProfile } from '../../shared/types/orders.ts';

import { fetchOrderProfile } from './orders.thunks.ts';

interface OrdersState {
	loading: boolean;
	ordersProfile: OrderGetProfile[];
}

const initialState: OrdersState = {
	loading: true,
	ordersProfile: [],
};

const ordersSlice = createSlice({
	name: 'orders',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchOrderProfile.pending, state => {
				state.loading = true;
			})
			.addCase(fetchOrderProfile.fulfilled, (state, action) => {
				state.loading = false;
				state.ordersProfile = action.payload;
			})
			.addCase(fetchOrderProfile.rejected, state => {
				state.loading = false;
			});
	},
});

export const ordersReducer = ordersSlice.reducer;
export const selectOrdersLoading = (state: RootState) => state.orders.loading;
export const selectOrdersGetProfile = (state: RootState) =>
	state.orders.ordersProfile;
