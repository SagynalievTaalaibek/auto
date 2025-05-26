import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '@/shared/store/store';

interface InventoryState {
	loading: boolean;
}

const initialState: InventoryState = {
	loading: false,
};

export const inventorySlice = createSlice({
	name: 'inventory',
	initialState,
	reducers: {},
});

export const inventoryReducer = inventorySlice.reducer;
export const selectInventoryLoading = (state: RootState) =>
	state.inventory.loading;
