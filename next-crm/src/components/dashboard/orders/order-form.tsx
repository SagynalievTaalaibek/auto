'use client';

import React, { useEffect, useState } from 'react';

import {
	Autocomplete,
	Box,
	Button,
	Checkbox,
	Divider,
	FormControl,
	FormHelperText,
	InputLabel,
	ListItemText,
	MenuItem,
	OutlinedInput,
	Select,
	TextField,
	Typography,
} from '@mui/material';

import { selectUsersCRM } from '@/features/auth/authSlice';
import { fetchUsersCRM } from '@/features/auth/authThunks';
import { selectMainServices } from '@/features/order/order.slice';
import { fetchMainServices } from '@/features/order/order.thunks';

import NumberInputStyled from '@/components/ui/number-input-styled';
import OrderBreadcrumbs from '@/components/ui/order-breadcrumbs';

import carData from '../../../shared/constants/car.json';

import { useAppDispatch, useAppSelector } from '@/shared/hooks/hooksStore';
import { OrderCRMSchema, TypeOrderCRMSchema } from '@/shared/schemas';

const masters = [
	{
		id: 'efc8452e-a8e6-4012-b3d0-d5432c4e834d',
		name: 'Arthur',
		specialization: 'Оклейка салона',
	},
	{
		id: '4592b6b1-e136-4208-80d8-a1ef9f6c45aa',
		name: 'Merlin',
		specialization: 'Химчистка',
	},
	{
		id: '5bca7890-e70b-4113-b3eb-515bb16073db',
		name: 'Percival',
		specialization: 'Полировка',
	},
];

export function OrderForm() {
	const dispatch = useAppDispatch();
	const mainServices = useAppSelector(selectMainServices);
	const users = useAppSelector(selectUsersCRM);
	/*	const router = useRouter();
	const { showSnackbar } = useAppSnackbar();*/

	useEffect(() => {
		const loadData = async () => {
			await dispatch(fetchMainServices());
			await dispatch(fetchUsersCRM());
		};

		void loadData();
	}, [dispatch]);

	const [formData, setFormData] = useState<TypeOrderCRMSchema>({
		carBrand: '',
		carModel: '',
		carYear: 0,
		carColor: '',
		categoryIds: [],
		serviceIds: [],
		notes: '',
		masterId: '',
		startTime: '',
		endTime: '',
		totalPrice: 0,
		photos: [],
		userId: '',
	});

	const [errors, setErrors] = useState<
		Partial<Record<keyof TypeOrderCRMSchema, string>>
	>({});

	const handleChange = (
		key: keyof TypeOrderCRMSchema,
		value: string | string[],
	) => {
		setFormData(prev => ({ ...prev, [key]: value }));
	};

	const handleSubmit = async () => {
		const result = OrderCRMSchema.safeParse(formData);
		if (!result.success) {
			const fieldErrors: Partial<Record<keyof TypeOrderCRMSchema, string>> = {};
			result.error.errors.forEach(err => {
				const field = err.path[0] as keyof TypeOrderCRMSchema;
				fieldErrors[field] = err.message;
			});
			setErrors(fieldErrors);
			console.log('Ошибка валидации:', fieldErrors);
			return;
		}

		/*const response = await dispatch(createOrder(formData));

		if (response.payload) {
			showSnackbar(response.payload.message, 'success');
			router.push(ROUTES.PROFILE);
		}*/

		console.log('Success', result.data);
	};

	// Для выбора модели по выбранной марке
	const models =
		carData.find(car => car.brand === formData.carBrand)?.models || [];

	const services = mainServices
		.filter(category => formData.categoryIds.includes(category.id))
		.flatMap(category => category.services);

	return (
		<Box className="container">
			<Box sx={{ mx: 'auto', mt: 4 }}>
				<OrderBreadcrumbs
					items={[
						{ label: 'Панель управления', href: '/dashboard' },
						{ label: 'Заказы', href: '/dashboard/orders' },
						{ label: 'Создание заказа' },
					]}
				/>

				<Divider sx={{ my: 2 }} />
				<Typography variant="h5" mb={2}>
					Создание заказа
				</Typography>

				<Autocomplete
					fullWidth
					options={users}
					getOptionLabel={option => option.email}
					value={users.find(user => user.id === formData.userId) || null}
					onChange={(event, newValue) => {
						handleChange('userId', newValue ? newValue.id : '');
					}}
					renderInput={params => (
						<TextField
							{...params}
							label="Клиент"
							margin="normal"
							error={!!errors.userId}
							helperText={errors.userId}
						/>
					)}
				/>

				<TextField
					fullWidth
					label="Марка"
					margin="normal"
					value={formData.carBrand}
					onChange={e => {
						handleChange('carBrand', e.target.value);
						handleChange('carModel', ''); // Очистить модель при смене марки
					}}
					error={!!errors.carBrand}
					helperText={errors.carBrand}
					select
				>
					<MenuItem value="">Выберите марку</MenuItem>
					{carData.map(car => (
						<MenuItem key={car.brand} value={car.brand}>
							{car.brand}
						</MenuItem>
					))}
				</TextField>

				<TextField
					fullWidth
					label="Модель"
					margin="normal"
					value={formData.carModel}
					onChange={e => handleChange('carModel', e.target.value)}
					error={!!errors.carModel}
					helperText={errors.carModel}
					select
					disabled={!formData.carBrand}
				>
					<MenuItem value="">Выберите модель</MenuItem>
					{models.map(model => (
						<MenuItem key={model} value={model}>
							{model}
						</MenuItem>
					))}
				</TextField>

				<NumberInputStyled
					label="Год выпуска"
					value={formData.carYear}
					onChange={e => handleChange('carYear', e.target.value)}
					error={!!errors.carYear}
					helperText={errors.carYear}
					min={1980}
					max={new Date().getFullYear()}
				/>

				<TextField
					fullWidth
					label="Цвет"
					margin="normal"
					value={formData.carColor}
					placeholder={'Черный'}
					onChange={e => handleChange('carColor', e.target.value)}
					error={!!errors.carColor}
					helperText={errors.carColor}
				/>

				<FormControl fullWidth margin="normal" error={!!errors.categoryIds}>
					<InputLabel>Категории</InputLabel>
					<Select
						multiple
						value={formData.categoryIds}
						onChange={e => {
							const value = e.target.value as string[];
							if (value.length <= 2) {
								handleChange('categoryIds', value);
								handleChange('serviceIds', []); // Сбросить выбранные услуги
							}
						}}
						input={<OutlinedInput label="Категории" />}
						renderValue={selected =>
							mainServices
								.filter(cat => selected.includes(cat.id))
								.map(cat => cat.name)
								.join(', ')
						}
					>
						{mainServices.map(cat => (
							<MenuItem
								key={cat.id}
								value={cat.id}
								disabled={
									formData.categoryIds.length >= 2 &&
									!formData.categoryIds.includes(cat.id)
								}
							>
								<Checkbox checked={formData.categoryIds.includes(cat.id)} />
								<ListItemText primary={cat.name} />
							</MenuItem>
						))}
					</Select>
				</FormControl>

				<FormControl fullWidth margin="normal" error={!!errors.serviceIds}>
					<InputLabel>Услуги</InputLabel>
					<Select
						multiple
						value={formData.serviceIds}
						onChange={e => handleChange('serviceIds', e.target.value)}
						input={<OutlinedInput label="Услуги" />}
						renderValue={selected =>
							services
								.filter(srv => selected.includes(srv.id))
								.map(srv => srv.name)
								.join(', ')
						}
					>
						{services.map(srv => (
							<MenuItem key={srv.id} value={srv.id}>
								<Checkbox checked={formData.serviceIds.includes(srv.id)} />
								<ListItemText primary={srv.name} />
							</MenuItem>
						))}
					</Select>
				</FormControl>

				<FormControl fullWidth margin="normal" error={!!errors.masterId}>
					<InputLabel>Ответственный мастер</InputLabel>
					<Select
						value={formData.masterId}
						label="Ответственный мастер"
						onChange={e => handleChange('masterId', e.target.value)}
					>
						{masters.map(master => (
							<MenuItem key={master.id} value={master.id}>
								{master.name} — {master.specialization}
							</MenuItem>
						))}
					</Select>
					<FormHelperText>{errors.masterId}</FormHelperText>
				</FormControl>

				<TextField
					fullWidth
					label="Дата и время начала"
					margin="normal"
					type="datetime-local"
					value={formData.startTime.slice(0, 16)}
					onChange={e => handleChange('startTime', e.target.value)}
					error={!!errors.startTime}
					helperText={errors.startTime}
				/>

				<TextField
					fullWidth
					label="Дата и время окончания"
					margin="normal"
					type="datetime-local"
					value={formData.endTime.slice(0, 16)}
					onChange={e => handleChange('endTime', e.target.value)}
					error={!!errors.endTime}
					helperText={errors.endTime}
				/>

				<NumberInputStyled
					label="Стоимость заказа"
					value={formData.totalPrice}
					onChange={e => handleChange('totalPrice', e.target.value)}
					error={!!errors.totalPrice}
					helperText={errors.totalPrice}
					min={2000}
				/>

				<Box mt={2}>
					<Typography variant="body1" mb={1}>
						Ссылки на фото автомобиля (можно вставить несколько через запятую)
					</Typography>
					<TextField
						fullWidth
						multiline
						rows={3}
						placeholder="https://drive.google.com/..., https://imgur.com/..."
						value={formData.photos?.join(', ') || ''}
						onChange={e => {
							const links = e.target.value
								.split(',')
								.map(link => link.trim())
								.filter(link => link !== '');
							handleChange('photos', links);
						}}
					/>
				</Box>

				<TextField
					fullWidth
					label="Заметки"
					multiline
					rows={3}
					margin="normal"
					value={formData.notes}
					onChange={e => handleChange('notes', e.target.value)}
				/>

				<Button
					variant="contained"
					fullWidth
					onClick={handleSubmit}
					sx={{ mt: 2 }}
				>
					Создать заказ
				</Button>
			</Box>
		</Box>
	);
}
