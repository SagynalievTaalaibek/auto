import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../../app/store/store.ts';

interface ReportsState {
	loading: boolean;
}

const initialState: ReportsState = {
	loading: false,
};

export const reportsSlice = createSlice({
	name: 'reports',
	initialState,
	reducers: {},
});

export const reportsReducer = reportsSlice.reducer;
export const selectReportsLoading = (state: RootState) => state.reports.loading;
