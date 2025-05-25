import { createSlice } from '@reduxjs/toolkit';

import {
	fetchMainServices,
	fetchOrderProfile,
} from '@/features/order/order.thunks';

import { RootState } from '@/shared/store/store';
import { IMainServiceData, OrderGetProfile } from '@/shared/types/orders';

interface OrderState {
	mainServices: IMainServiceData[];
	orderProfile: OrderGetProfile[];
	loading: boolean;
}

const initialState: OrderState = {
	mainServices: [],
	orderProfile: [],
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
			.addCase(fetchOrderProfile.pending, state => {
				state.loading = true;
			})
			.addCase(fetchOrderProfile.fulfilled, (state, action) => {
				state.loading = false;
				state.orderProfile = action.payload;
			})
			.addCase(fetchOrderProfile.rejected, state => {
				state.loading = false;
			});
	},
});

export const orderReducer = orderSlice.reducer;

export const selectOrdersProfile = (state: RootState) =>
	state.orders.orderProfile;

/// SERVICES
export const selectMainServices = (state: RootState) =>
	state.orders.mainServices;
