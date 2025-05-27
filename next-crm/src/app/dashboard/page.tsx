'use client';

import React from 'react';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import EventNoteIcon from '@mui/icons-material/EventNote';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import {
	Box,
	Button,
	Divider,
	List,
	ListItem,
	ListItemText,
	Paper,
	Stack,
	Tooltip,
	Typography,
} from '@mui/material';

// --- Моковые данные статистики ---
const stats = [
	{
		label: 'Заказы сегодня',
		value: 14,
		icon: <AssignmentTurnedInIcon color="primary" fontSize="large" />,
	},
	{
		label: 'Заказы за неделю',
		value: 76,
		icon: <AccessTimeIcon color="secondary" fontSize="large" />,
	},
	{
		label: 'Выручка',
		value: '1 250 000 ₽',
		icon: <MonetizationOnIcon color="success" fontSize="large" />,
	},
	{
		label: 'Новые клиенты',
		value: 9,
		icon: <PersonAddIcon color="info" fontSize="large" />,
	},
];

// --- Моковые активные заказы ---
const activeOrders = [
	{
		id: 1,
		client: 'Иван Иванов',
		service: 'Полировка',
		status: 'В процессе',
		time: '10:30',
	},
	{
		id: 2,
		client: 'Анна Петрова',
		service: 'Химчистка салона',
		status: 'В процессе',
		time: '12:00',
	},
	{
		id: 3,
		client: 'Сергей Ковалев',
		service: 'Тонирование',
		status: 'В процессе',
		time: '13:45',
	},
];

export default function DashboardPage() {
	return (
		<Box sx={{ width: '100%', p: 3 }}>
			<Typography variant="h4" sx={{ fontWeight: 600, mb: 3 }} gutterBottom>
				Рабочий стол
			</Typography>

			{/* Панель статистики */}
			<Stack
				direction={{ xs: 'column', sm: 'row' }}
				spacing={3}
				mb={4}
				justifyContent="space-between"
			>
				{stats.map(({ label, value, icon }) => (
					<Paper
						key={label}
						sx={{
							flex: 1,
							p: 2,
							display: 'flex',
							alignItems: 'center',
							gap: 2,
							boxShadow: 4,
							borderRadius: 2,
							minWidth: 200,
						}}
					>
						<Box>{icon}</Box>
						<Box>
							<Typography variant="subtitle2" color="text.secondary">
								{label}
							</Typography>
							<Typography variant="h5" fontWeight="bold">
								{value}
							</Typography>
						</Box>
					</Paper>
				))}
			</Stack>

			{/* Контейнер для активных заказов и быстрых действий */}
			<Box
				sx={{
					display: 'flex',
					flexDirection: { xs: 'column', md: 'row' },
					gap: 4,
					mb: 4,
				}}
			>
				{/* Активные заказы */}
				<Paper sx={{ flex: 2, p: 3, boxShadow: 4, borderRadius: 2 }}>
					<Typography variant="h6" mb={2}>
						Активные заказы
					</Typography>
					<List>
						{activeOrders.map(({ id, client, service, status, time }) => (
							<React.Fragment key={id}>
								<ListItem
									secondaryAction={
										<Tooltip title={status}>
											<Typography
												color="primary"
												fontWeight="bold"
												sx={{ minWidth: 80 }}
											>
												{time}
											</Typography>
										</Tooltip>
									}
								>
									<ListItemText
										primary={`${client} — ${service}`}
										secondary={`Статус: ${status}`}
									/>
								</ListItem>
								<Divider component="li" />
							</React.Fragment>
						))}
					</List>
				</Paper>

				{/* Быстрые действия */}
				<Paper
					sx={{
						flex: 1,
						p: 3,
						boxShadow: 4,
						borderRadius: 2,
						display: 'flex',
						flexDirection: 'column',
						gap: 2,
						height: 'fit-content',
					}}
				>
					<Typography variant="h6" mb={2}>
						Быстрые действия
					</Typography>
					<Button
						variant="contained"
						startIcon={<AddCircleOutlineIcon />}
						fullWidth
						size="large"
					>
						Создать заказ
					</Button>
					<Button
						variant="outlined"
						startIcon={<PersonAddIcon />}
						fullWidth
						size="large"
					>
						Добавить клиента
					</Button>
					<Button
						variant="outlined"
						startIcon={<EventNoteIcon />}
						fullWidth
						size="large"
					>
						Записать на услугу
					</Button>
				</Paper>
			</Box>
		</Box>
	);
}
