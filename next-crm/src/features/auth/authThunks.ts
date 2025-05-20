import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';

import axiosApi from '@/shared/config/axioxApi';
import { API_ROUTES } from '@/shared/constants/constants';
import { TypeLoginSchema } from '@/shared/schemas';
import { ErrorResponse } from '@/shared/types/error';

export const loginUser = createAsyncThunk(
	'auth/loginUser',
	async (data: TypeLoginSchema, { rejectWithValue }) => {
		try {
			const response = await axiosApi.post(API_ROUTES.LOGIN, data);
			return response.data.user;
		} catch (error: unknown) {
			const axiosError = error as AxiosError<ErrorResponse>;

			return rejectWithValue(
				axiosError.response?.data?.message || 'Login failed',
			);
		}
	},
);

export const verifyToken = createAsyncThunk(
	'auth/verifyToken',
	async (token: string | null) => {
		const response = await axiosApi.post(API_ROUTES.EMAIL_CONFIRMATION, token);
		return response.data.user;
	},
);
/*
export const logout = createAsyncThunk<void, undefined, { state: RootState }>(
	'users/logout',
	async (_, { getState, dispatch }) => {
		const token = getState().auth.user?.token || getState().auth.employer?.token;
		const response = await axiosApi.delete('/user/sessions', { headers: { Authorization: 'Bearer ' + token } });
		if (getState().auth.user?.token) {
			dispatch(openSuccessMessage(response.data.message));
			dispatch(unsetUser());
		} else {
			dispatch(openSuccessMessage(response.data.message));
			dispatch(unsetEmployer());
		}
	},
);*/
