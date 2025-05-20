import { createSlice } from '@reduxjs/toolkit';

import { loginUser, verifyToken } from '@/features/auth/authThunks';

import { RootState } from '@/shared/store/store';
import { IUser } from '@/shared/types/user';

interface AuthState {
	user: IUser | null;
	loading: boolean;
	error: string | null;
	message: string | null;
}

const initialState: AuthState = {
	user: null,
	loading: false,
	error: null,
	message: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: state => {
			state.user = null;
		},
		saveUser: (state, action) => {
			state.user = action.payload;
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
				state.user = action.payload;
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string;
			});

		builder
			.addCase(verifyToken.pending, state => {
				state.loading = true;
			})
			.addCase(verifyToken.fulfilled, (state, action) => {
				state.loading = false;
				state.user = action.payload;
			})
			.addCase(verifyToken.rejected, state => {
				state.loading = false;
			});
	},
});

export const authReducer = authSlice.reducer;
export const { logout, saveUser } = authSlice.actions;
export default authSlice.reducer;
export const selectUser = (state: RootState) => state.auth.user;
