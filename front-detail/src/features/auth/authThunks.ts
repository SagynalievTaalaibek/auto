import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';

import axiosApi from '../../shared/config/axiosApi.ts';
import { API_ROUTES } from '../../shared/constants/constants.ts';
import type { TypeLoginSchema } from '../../shared/schemas';
import type { ErrorResponse } from '../../shared/types/error.ts';
import type {
	IAssignRole,
	IMasterDataCRM,
	IUsersDataCRM,
} from '../../shared/types/user.ts';

import { logout } from './authSlice.ts';

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

export const logoutUser = createAsyncThunk<void, undefined>(
	'auth/logoutUser',
	async (_, { dispatch }) => {
		await axiosApi.post(API_ROUTES.LOGOUT);
		dispatch(logout());
	},
);

export const fetchUsersCRM = createAsyncThunk(
	'auth/fetchUsersCRM',
	async () => {
		const response = await axiosApi.get<IUsersDataCRM[]>(
			API_ROUTES.USERS_GET_CRM,
		);
		return response.data;
	},
);

export const fetchMastersCRM = createAsyncThunk(
	'auth/fetchMastersCRM',
	async () => {
		const response = await axiosApi.get<IMasterDataCRM[]>(
			API_ROUTES.USERS_GET_MASTERS,
		);
		return response.data;
	},
);

export const assignRole = createAsyncThunk(
	'auth/assignRole',
	async (data: IAssignRole, { rejectWithValue }) => {
		try {
			const response = await axiosApi.post(API_ROUTES.ASSIGN_ROLE, data);
			return response.data;
		} catch (error: unknown) {
			const axiosError = error as AxiosError<ErrorResponse>;

			return rejectWithValue(
				axiosError.response?.data?.message || 'Change role failed',
			);
		}
	},
);
