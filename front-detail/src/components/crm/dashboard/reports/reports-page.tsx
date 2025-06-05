import { useState } from 'react';

import {
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	Typography,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';

export function ReportsPage() {
	const [startDate, setStartDate] = useState<Dayjs | null>(
		dayjs().startOf('month'),
	);
	const [endDate, setEndDate] = useState<Dayjs | null>(dayjs());
	const [reportType, setReportType] = useState('orders');

	const handleExport = (format: 'pdf' | 'excel') => {
		console.log('Export:', {
			reportType,
			startDate: startDate?.format('YYYY-MM-DD'),
			endDate: endDate?.format('YYYY-MM-DD'),
			format,
		});
	};

	return (
		<Box sx={{ py: 3, width: '100%' }}>
			<Paper sx={{ p: 3, mb: 4 }}>
				<Typography variant="h6" mb={2}>
					Параметры отчета
				</Typography>

				<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
					<FormControl fullWidth>
						<InputLabel id="report-type-label">Тип отчета</InputLabel>
						<Select
							labelId="report-type-label"
							value={reportType}
							label="Тип отчета"
							onChange={e => setReportType(e.target.value)}
						>
							<MenuItem value="orders">Заказы</MenuItem>
							<MenuItem value="finance">Финансы</MenuItem>
							<MenuItem value="warehouse">Склад</MenuItem>
							<MenuItem value="staff">Персонал</MenuItem>
						</Select>
					</FormControl>

					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
							<DatePicker
								label="Дата начала"
								value={startDate}
								onChange={newValue => setStartDate(newValue)}
							/>
							<DatePicker
								label="Дата окончания"
								value={endDate}
								onChange={newValue => setEndDate(newValue)}
							/>
						</Box>
					</LocalizationProvider>

					<Box sx={{ display: 'flex', gap: 2 }}>
						<Button
							variant="contained"
							color="primary"
							onClick={() => handleExport('excel')}
						>
							📥 Экспорт в Excel
						</Button>
						<Button
							variant="contained"
							color="secondary"
							onClick={() => handleExport('pdf')}
						>
							📄 Экспорт в PDF
						</Button>
					</Box>
				</Box>
			</Paper>

			<Paper sx={{ p: 3 }}>
				<Typography variant="h6" mb={2}>
					📌 Описание типов отчетов
				</Typography>
				<ul style={{ marginLeft: '1.2rem', lineHeight: 1.8 }}>
					<li>
						<strong>Заказы</strong>: список заказов за указанный период.
					</li>
					<li>
						<strong>Финансы</strong>: выручка, расходы, прибыль.
					</li>
					<li>
						<strong>Склад</strong>: движение материалов (поступление, списание).
					</li>
					<li>
						<strong>Персонал</strong>: рабочие часы и загрузка мастеров.
					</li>
				</ul>
			</Paper>
		</Box>
	);
}
