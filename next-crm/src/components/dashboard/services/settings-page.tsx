'use client';

import React, { useState } from 'react';

import {
	Box,
	Button,
	FormControl,
	FormControlLabel,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	Switch,
	TextField,
	Typography,
} from '@mui/material';

export function SettingsPage() {
	// Пример стейтов для формы
	const [centerName, setCenterName] = useState('Детейлинг Центр');
	const [logoUrl, setLogoUrl] = useState('');
	const [workingHours, setWorkingHours] = useState('9:00 - 18:00');
	const [notificationEmail, setNotificationEmail] =
		useState('notify@example.com');
	const [notificationTelegram, setNotificationTelegram] = useState(false);

	const [userRole, setUserRole] = useState('admin');
	const [carType, setCarType] = useState('Седан');
	const [serviceType, setServiceType] = useState('Полировка');

	const handleSave = () => {
		// Здесь логика сохранения настроек, пока просто лог
		console.log({
			centerName,
			logoUrl,
			workingHours,
			notificationEmail,
			notificationTelegram,
			userRole,
			carType,
			serviceType,
		});
	};

	return (
		<Box sx={{ py: 3, width: '100%' }}>
			<Paper sx={{ p: 3, mb: 4 }}>
				<Typography variant="h6" mb={2}>
					Информация о центре
				</Typography>
				<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
					<TextField
						label="Название центра"
						value={centerName}
						onChange={e => setCenterName(e.target.value)}
						fullWidth
					/>
					<TextField
						label="URL логотипа"
						value={logoUrl}
						onChange={e => setLogoUrl(e.target.value)}
						placeholder="https://example.com/logo.png"
						fullWidth
					/>
					<TextField
						label="Часы работы"
						value={workingHours}
						onChange={e => setWorkingHours(e.target.value)}
						helperText="Например: 9:00 - 18:00"
						fullWidth
					/>
				</Box>
			</Paper>

			<Paper sx={{ p: 3, mb: 4 }}>
				<Typography variant="h6" mb={2}>
					Настройка пользователей и ролей
				</Typography>
				<FormControl fullWidth>
					<InputLabel id="user-role-label">Роль пользователя</InputLabel>
					<Select
						labelId="user-role-label"
						value={userRole}
						label="Роль пользователя"
						onChange={e => setUserRole(e.target.value)}
					>
						<MenuItem value="admin">Администратор</MenuItem>
						<MenuItem value="master">Мастер</MenuItem>
						<MenuItem value="client">Клиент</MenuItem>
					</Select>
				</FormControl>
			</Paper>

			<Paper sx={{ p: 3, mb: 4 }}>
				<Typography variant="h6" mb={2}>
					Настройка видов авто и услуг
				</Typography>
				<Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
					<FormControl sx={{ minWidth: 180 }}>
						<InputLabel id="car-type-label">Вид авто</InputLabel>
						<Select
							labelId="car-type-label"
							value={carType}
							label="Вид авто"
							onChange={e => setCarType(e.target.value)}
						>
							<MenuItem value="Седан">Седан</MenuItem>
							<MenuItem value="Внедорожник">Внедорожник</MenuItem>
							<MenuItem value="Хэтчбек">Хэтчбек</MenuItem>
							<MenuItem value="Купе">Купе</MenuItem>
						</Select>
					</FormControl>

					<FormControl sx={{ minWidth: 180 }}>
						<InputLabel id="service-type-label">Тип услуги</InputLabel>
						<Select
							labelId="service-type-label"
							value={serviceType}
							label="Тип услуги"
							onChange={e => setServiceType(e.target.value)}
						>
							<MenuItem value="Полировка">Полировка</MenuItem>
							<MenuItem value="Тонирование">Тонирование</MenuItem>
							<MenuItem value="Химчистка">Химчистка</MenuItem>
							<MenuItem value="Оклейка">Оклейка</MenuItem>
						</Select>
					</FormControl>
				</Box>
			</Paper>

			<Paper sx={{ p: 3, mb: 4 }}>
				<Typography variant="h6" mb={2}>
					Настройки уведомлений
				</Typography>
				<Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
					<TextField
						label="Email для уведомлений"
						value={notificationEmail}
						onChange={e => setNotificationEmail(e.target.value)}
						fullWidth
					/>
					<FormControlLabel
						control={
							<Switch
								checked={notificationTelegram}
								onChange={e => setNotificationTelegram(e.target.checked)}
							/>
						}
						label="Telegram-уведомления"
					/>
				</Box>
			</Paper>

			<Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
				<Button variant="contained" color="primary" onClick={handleSave}>
					Сохранить настройки
				</Button>
			</Box>
		</Box>
	);
}
