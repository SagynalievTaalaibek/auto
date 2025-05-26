import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '@/shared/store/store';

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
