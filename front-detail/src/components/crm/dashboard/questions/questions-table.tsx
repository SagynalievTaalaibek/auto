import Box from '@mui/material/Box';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';

import { selectQuestions } from '../../../../features/question/question.slice.ts';
import { useAppSelector } from '../../../../shared/hooks/hooksStore.ts';
import type { QuestionsTableProps } from '../../../../shared/types/contacts.ts';

export const QuestionsTable = () => {
	const questionsData = useAppSelector(selectQuestions);

	const columns: GridColDef<QuestionsTableProps>[] = [
		{
			field: 'name',
			headerName: 'Клиент',
			flex: 1,
			renderCell: ({ row }) => <span>{row.name}</span>,
		},
		{
			field: 'phone',
			headerName: 'Номер',
			flex: 1,
			renderCell: ({ row }) => <span>{row.phone}</span>,
		},
		{
			field: 'question',
			headerName: 'Вопросы',
			flex: 2,
			renderCell: ({ row }) => <span>{row.question}</span>,
		},
		{
			field: 'createdAt',
			headerName: 'Создан',
			flex: 1.2,
			renderCell: ({ row }) => (
				<span>{new Date(row.createdAt).toLocaleString()}</span>
			),
		},
	];

	return (
		<Box sx={{ width: '100%', p: 2 }}>
			<Box sx={{ height: 600 }}>
				<DataGrid
					rows={questionsData}
					columns={columns}
					getRowId={row => row.id}
					disableRowSelectionOnClick
				/>
			</Box>
		</Box>
	);
};
