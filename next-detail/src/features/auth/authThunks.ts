import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';

import { logout } from '@/features/auth/authSlice';

import axiosApi from '@/shared/config/axioxApi';
import { API_ROUTES } from '@/shared/constants/constants';
import { TypeLoginSchema, TypeRegisterSchema } from '@/shared/schemas';
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

export const registerUser = createAsyncThunk(
	'auth/registerUser',
	async (data: TypeRegisterSchema, { rejectWithValue }) => {
		try {
			const response = await axiosApi.post(API_ROUTES.REGISTER, data);
			return response.data;
		} catch (error: unknown) {
			const axiosError = error as AxiosError<ErrorResponse>;

			return rejectWithValue(
				axiosError.response?.data?.message || 'Register failed',
			);
		}
	},
);

export const logoutUser = createAsyncThunk<void, undefined>(
	'auth/logoutUser',
	async (_, { dispatch }) => {
		await axiosApi.post(API_ROUTES.LOGOUT);
		dispatch(logout());
	},
);
