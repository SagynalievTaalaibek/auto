'use client';

import { useEffect, useState } from 'react';

import {
	Box,
	Button,
	Checkbox,
	FormControl,
	InputLabel,
	ListItemText,
	MenuItem,
	OutlinedInput,
	Select,
	TextField,
	Typography,
} from '@mui/material';

import { selectMainServices } from '@/features/order/order.slice';
import { createOrder, fetchMainServices } from '@/features/order/order.thunks';

import NumberInputStyled from '@/components/ui/number-input-styled';

import carData from '../../../shared/constants/car.json';

import { useAppDispatch, useAppSelector } from '@/shared/hooks/hooksStore';
import { useAppSnackbar } from '@/shared/hooks/useAppSnackbar';
import { OrderSchema, TypeOrderSchema } from '@/shared/schemas';

export default function Page() {
	const dispatch = useAppDispatch();
	const mainServices = useAppSelector(selectMainServices);
	const { showSnackbar } = useAppSnackbar();

	useEffect(() => {
		dispatch(fetchMainServices());
	}, [dispatch]);

	const [formData, setFormData] = useState<TypeOrderSchema>({
		carBrand: '',
		carModel: '',
		carYear: 0,
		carColor: '',
		categoryIds: [],
		serviceIds: [],
		notes: '',
	});

	const [errors, setErrors] = useState<
		Partial<Record<keyof TypeOrderSchema, string>>
	>({});

	const handleChange = (
		key: keyof TypeOrderSchema,
		value: string | string[],
	) => {
		setFormData(prev => ({ ...prev, [key]: value }));
	};

	const handleSubmit = async () => {
		console.log(formData);
		const result = OrderSchema.safeParse(formData);
		if (!result.success) {
			const fieldErrors: Partial<Record<keyof TypeOrderSchema, string>> = {};
			result.error.errors.forEach(err => {
				const field = err.path[0] as keyof TypeOrderSchema;
				fieldErrors[field] = err.message;
			});
			setErrors(fieldErrors);
			console.log('Ошибка валидации:', fieldErrors);
			return;
		}

		const response = await dispatch(createOrder(formData));

		if (response.payload) {
			showSnackbar(response.payload.message, 'success');
		}

		console.log('Данные заказа:', result.data);
		// Тут можно вызвать fetch / axios
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
				<Typography variant="h5" mb={2}>
					Создание заказа
				</Typography>

				{/* Поля формы с MUI */}
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
