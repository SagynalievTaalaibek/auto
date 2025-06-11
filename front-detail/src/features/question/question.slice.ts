import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../../app/store/store.ts';
import type { QuestionsTableProps } from '../../shared/types/contacts.ts';

import { findAllQuestion } from './question.thunks.ts';

interface InventoryState {
	loading: boolean;
	questions: QuestionsTableProps[];
}

const initialState: InventoryState = {
	loading: false,
	questions: [],
};

export const questionSlice = createSlice({
	name: 'question',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(findAllQuestion.pending, state => {
				state.loading = true;
			})
			.addCase(findAllQuestion.fulfilled, (state, action) => {
				state.questions = action.payload;
				state.loading = false;
			})
			.addCase(findAllQuestion.rejected, state => {
				state.loading = false;
			});
	},
});

export const questionReducer = questionSlice.reducer;
export const selectQuestionLoading = (state: RootState) =>
	state.question.loading;
export const selectQuestions = (state: RootState) => state.question.questions;
