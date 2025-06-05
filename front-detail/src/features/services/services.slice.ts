import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../../app/store/store.ts';
import type { IMainService } from '../../shared/types/services.ts';

import { fetchMainServices } from './services.thunks.ts';

interface ServiceState {
	mainServices: IMainService[];
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
export const selectLoadingServices = (state: RootState) =>
	state.services.loading;
