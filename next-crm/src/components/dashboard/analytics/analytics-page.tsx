'use client';

import React, { useState } from 'react';

import { Box, Button, ButtonGroup, Paper, Typography } from '@mui/material';
import {
	Bar,
	BarChart,
	Cell,
	Legend,
	Pie,
	PieChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';

const revenueData = [
	{ period: 'Пн', revenue: 1200 },
	{ period: 'Вт', revenue: 2100 },
	{ period: 'Ср', revenue: 800 },
	{ period: 'Чт', revenue: 1600 },
	{ period: 'Пт', revenue: 900 },
	{ period: 'Сб', revenue: 1700 },
	{ period: 'Вс', revenue: 1300 },
];

const popularServicesData = [
	{ name: 'Полировка', value: 400 },
	{ name: 'Тонировка', value: 300 },
	{ name: 'Химчистка', value: 200 },
	{ name: 'Оклейка пленкой', value: 100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const mastersWorkloadData = [
	{ name: 'Иван', hours: 30 },
	{ name: 'Мария', hours: 25 },
	{ name: 'Пётр', hours: 20 },
	{ name: 'Анна', hours: 35 },
];

export function AnalyticsPage() {
	const [period, setPeriod] = useState<'day' | 'week' | 'month' | 'year'>(
		'week',
	);

	return (
		<Box sx={{ width: '100%', py: 3 }}>
			{/* Период */}
			<Box sx={{ mb: 3 }}>
				<ButtonGroup variant="outlined" color="primary">
					{['day', 'week', 'month', 'year'].map(p => (
						<Button
							key={p}
							variant={period === p ? 'contained' : 'outlined'}
							onClick={() => setPeriod(p as typeof period)}
						>
							{p === 'day'
								? 'День'
								: p === 'week'
									? 'Неделя'
									: p === 'month'
										? 'Месяц'
										: 'Год'}
						</Button>
					))}
				</ButtonGroup>
			</Box>

			{/* Карточки с цифрами */}
			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					gap: 2,
					mb: 4,
					justifyContent: 'space-between',
				}}
			>
				{[
					{ label: `Выручка (${period})`, value: '150 000' },
					{ label: 'Количество заказов', value: '320' },
					{ label: 'Средний чек', value: '4 700' },
					{ label: 'Расходы на склад', value: '45 000' },
				].map(({ label, value }) => (
					<Paper
						key={label}
						sx={{
							flex: '1 1 200px',
							p: 2,
							minWidth: 200,
							maxWidth: 300,
							boxShadow: 3,
							borderRadius: 2,
						}}
					>
						<Typography variant="subtitle1" color="text.secondary">
							{label}
						</Typography>
						<Typography variant="h5" fontWeight="bold" mt={1}>
							{value}
						</Typography>
					</Paper>
				))}
			</Box>

			{/* Блоки с графиками */}
			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					gap: 3,
					justifyContent: 'space-between',
				}}
			>
				{/* Выручка по дням недели */}
				<Paper
					sx={{
						flex: '1 1 600px',
						minWidth: 300,
						height: 320,
						p: 2,
						boxShadow: 3,
						borderRadius: 2,
					}}
				>
					<Typography variant="h6" mb={2}>
						Выручка по дням недели
					</Typography>
					<ResponsiveContainer width="100%" height="85%">
						<BarChart data={revenueData}>
							<XAxis dataKey="period" />
							<YAxis />
							<Tooltip />
							<Bar dataKey="revenue" fill="#1976d2" />
						</BarChart>
					</ResponsiveContainer>
				</Paper>

				{/* Популярные услуги */}
				<Paper
					sx={{
						flex: '1 1 300px',
						minWidth: 280,
						height: 320,
						p: 2,
						boxShadow: 3,
						borderRadius: 2,
					}}
				>
					<Typography variant="h6" mb={2}>
						Популярные услуги
					</Typography>
					<ResponsiveContainer width="100%" height="85%">
						<PieChart>
							<Pie
								data={popularServicesData}
								dataKey="value"
								nameKey="name"
								outerRadius={100}
								fill="#8884d8"
								label
							>
								{popularServicesData.map((entry, index) => (
									<Cell
										key={`cell-${index}`}
										fill={COLORS[index % COLORS.length]}
									/>
								))}
							</Pie>
							<Legend verticalAlign="bottom" height={36} />
							<Tooltip />
						</PieChart>
					</ResponsiveContainer>
				</Paper>
			</Box>

			{/* Загруженность мастеров */}
			<Paper
				sx={{
					mt: 4,
					p: 2,
					boxShadow: 3,
					borderRadius: 2,
					height: 250,
					minWidth: 280,
				}}
			>
				<Typography variant="h6" mb={2}>
					Загруженность мастеров (часы работы)
				</Typography>
				<ResponsiveContainer width="100%" height={180}>
					<BarChart
						data={mastersWorkloadData}
						layout="vertical"
						margin={{ left: 40 }}
					>
						<XAxis type="number" />
						<YAxis type="category" dataKey="name" />
						<Tooltip />
						<Bar dataKey="hours" fill="#82ca9d" />
					</BarChart>
				</ResponsiveContainer>
			</Paper>
		</Box>
	);
}
