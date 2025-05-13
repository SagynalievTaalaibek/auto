import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';

import { ErrorResponse } from '@/types/error';

import axiosApi from '@/config/axioxApi';
import { API_ROUTES } from '@/config/constants';
import { TypeLoginSchema, TypeRegisterSchema } from '@/schemas';

export const loginUser = createAsyncThunk(
	'auth/loginUser',
	async (data: TypeLoginSchema, { rejectWithValue }) => {
		try {
			const response = await axiosApi.post(API_ROUTES.LOGIN, data);
			return response.data;
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
