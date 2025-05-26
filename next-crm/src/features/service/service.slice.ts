import { createSlice } from '@reduxjs/toolkit';

import { fetchMainServices } from '@/features/service/service.thunks';

import { RootState } from '@/shared/store/store';
import { IMainServiceData } from '@/shared/types/orders';

interface ServiceState {
	mainServices: IMainServiceData[];
	loading: boolean;
}

const initialState: ServiceState = {
	mainServices: [],
	loading: false,
};

export const serviceSlice = createSlice({
	name: 'service',
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
	},
});

export const serviceReducer = serviceSlice.reducer;
export const selectMainServices = (state: RootState) =>
	state.services.mainServices;
