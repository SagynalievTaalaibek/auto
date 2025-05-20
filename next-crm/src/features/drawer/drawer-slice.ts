import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '@/shared/store/store';

interface AuthState {
	open: boolean;
}

const initialState: AuthState = {
	open: false,
};

const drawerSlice = createSlice({
	name: 'drawer',
	initialState,
	reducers: {
		closeDrawer: state => {
			state.open = false;
		},
		openDrawer: state => {
			state.open = true;
		},
	},
});

export const drawerReducer = drawerSlice.reducer;
export const { closeDrawer, openDrawer } = drawerSlice.actions;

export const selectDrawerOpen = (store: RootState) => store.drawer.open;
