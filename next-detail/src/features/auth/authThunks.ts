import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';

import { ErrorResponse } from '@/types/error';
import { LoginPayload, User } from '@/types/user';

import axiosApi from '@/config/axioxApi';

export const loginUser = createAsyncThunk(
	'auth/loginUser',
	async (credentials: LoginPayload, { rejectWithValue }) => {
		try {
			const response = await axiosApi.post('/auth/login', credentials);
			console.log('Thunks', response);

			return response.data;
		} catch (error: unknown) {
			const axiosError = error as AxiosError<ErrorResponse>;

			return rejectWithValue(
				axiosError.response?.data?.message || 'Login failed',
			);
		}
	},
);

export async function getCurrentUser(): Promise<User | null> {
	try {
		const response = await axiosApi('/auth/me');
		return response.data;
	} catch (error) {
		console.error('Error fetching current user:', error);
		return null;
	}
}
