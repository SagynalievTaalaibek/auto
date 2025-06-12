import { useEffect } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { QuestionsTable } from '../../../../components/crm/dashboard/questions/questions-table.tsx';
import { LoadingScreen } from '../../../../components/ui/loading-screen/loading-screen.tsx';
import { selectQuestionLoading } from '../../../../features/question/question.slice.ts';
import { findAllQuestion } from '../../../../features/question/question.thunks.ts';
import {
	useAppDispatch,
	useAppSelector,
} from '../../../../shared/hooks/hooksStore.ts';

export const DashboardQuestion = () => {
	const dispatch = useAppDispatch();
	const loading = useAppSelector(selectQuestionLoading);

	useEffect(() => {
		dispatch(findAllQuestion());
	}, [dispatch]);

	return (
		<Box>
			<Typography variant="h4" sx={{ fontWeight: 600 }} gutterBottom>
				Вопросы от клиентов
			</Typography>

			{loading ? <LoadingScreen /> : <QuestionsTable />}
		</Box>
	);
};
