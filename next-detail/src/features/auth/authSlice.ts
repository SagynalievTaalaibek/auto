import { createSlice } from '@reduxjs/toolkit';

import { loginUser } from '@/features/auth/authThunks';

import { User } from '@/types/user';

interface AuthState {
	user: User | null;
	loading: boolean;
	error: string | null;
}

const initialState: AuthState = {
	user: null,
	loading: false,
	error: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: state => {
			state.user = null;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(loginUser.pending, state => {
				state.loading = true;
				state.error = null;
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.loading = false;
				console.log('Slice user', action.payload);
				state.user = action.payload;
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.loading = false;
				console.log('Slice user error', action.payload);
				state.error = action.payload as string;
			});
	},
});

export const authReducer = authSlice.reducer;
export const { logout } = authSlice.actions;
export default authSlice.reducer;
