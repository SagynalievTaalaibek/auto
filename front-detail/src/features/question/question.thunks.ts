import { createAsyncThunk } from '@reduxjs/toolkit';

import axiosApi from '../../shared/config/axiosApi.ts';
import { API_ROUTES } from '../../shared/constants/constants.ts';
import type { TypeQuestionSchema } from '../../shared/schemas/question.schema.ts';

export const createQuestion = createAsyncThunk(
	'question/create',
	async (data: TypeQuestionSchema) => {
		await axiosApi.post(API_ROUTES.QUESTION, data);
	},
);

export const findAllQuestion = createAsyncThunk(
	'question/findAll',
	async () => {
		const response = await axiosApi.get(API_ROUTES.QUESTION);
		return response.data;
	},
);
