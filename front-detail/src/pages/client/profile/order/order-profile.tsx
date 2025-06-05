import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

import NumberInputStyled from '../../../../components/ui/number-input-styled.tsx';
import {
	selectCars,
	selectCarsBodyType,
} from '../../../../features/cars/cars.slice.ts';
import {
	fetchCars,
	fetchCarsBodyType,
} from '../../../../features/cars/cars.thunks.ts';
import { createOrderClient } from '../../../../features/orders/orders.thunks.ts';
import { selectMainServices } from '../../../../features/services/services.slice.ts';
import { fetchMainServices } from '../../../../features/services/services.thunks.ts';
import { ROUTES } from '../../../../shared/constants/constants.ts';
import {
	useAppDispatch,
	useAppSelector,
} from '../../../../shared/hooks/hooksStore.ts';
import { useAppSnackbar } from '../../../../shared/hooks/useAppSnackbar.tsx';
import {
	OrderProfileSchema,
	type TypeOrderProfileSchema,
} from '../../../../shared/schemas';

export const OrderProfile = () => {
	const dispatch = useAppDispatch();
	const mainServices = useAppSelector(selectMainServices);
	const carsData = useAppSelector(selectCars);
	const carsBodyTypeData = useAppSelector(selectCarsBodyType);

	const { showSnackbar } = useAppSnackbar();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(fetchMainServices());
		dispatch(fetchCars());
		dispatch(fetchCarsBodyType());
	}, [dispatch]);

	const [formData, setFormData] = useState<TypeOrderProfileSchema>({
		modelCarId: '',
		bodyTypeId: '',
		carYear: 0,
		carColor: '',
		orderCategoryIds: [],
		orderServiceIds: [],
		notes: '',
	});

	const [brand, setBrand] = useState<string>('');

	const [errors, setErrors] = useState<
		Partial<Record<keyof TypeOrderProfileSchema, string>>
	>({});

	const handleChange = (
		key: keyof TypeOrderProfileSchema,
		value: string | string[],
	) => {
		setFormData(prev => ({ ...prev, [key]: value }));
	};

	const handleSubmit = async () => {
		const result = OrderProfileSchema.safeParse(formData);
		if (!result.success) {
			const fieldErrors: Partial<Record<keyof TypeOrderProfileSchema, string>> =
				{};
			result.error.errors.forEach(err => {
				const field = err.path[0] as keyof TypeOrderProfileSchema;
				fieldErrors[field] = err.message;
			});
			setErrors(fieldErrors);
			console.log('Ошибка валидации:', fieldErrors);
			return;
		}

		const response = await dispatch(createOrderClient(formData));

		if (response.payload) {
			showSnackbar(response.payload.message, 'success');
			navigate(ROUTES.PROFILE);
		}
	};

	// Для выбора модели по выбранной марке
	const models = carsData.find(car => car.id === brand)?.models || [];

	const services = mainServices
		.filter(category => formData.orderCategoryIds.includes(category.id))
		.flatMap(category => category.services);

	return (
		<Box sx={{ marginTop: '74px' }}>
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
						value={brand}
						onChange={e => {
							setBrand(e.target.value);
							handleChange('modelCarId', '');
						}}
						error={!!errors.modelCarId}
						helperText={errors.modelCarId}
						select
					>
						<MenuItem value="">Выберите марку</MenuItem>
						{carsData.map(car => (
							<MenuItem key={car.id} value={car.id}>
								{car.name}
							</MenuItem>
						))}
					</TextField>

					<TextField
						fullWidth
						label="Модель"
						margin="normal"
						value={formData.modelCarId}
						onChange={e => handleChange('modelCarId', e.target.value)}
						error={!!errors.modelCarId}
						helperText={errors.modelCarId}
						select
						disabled={!brand}
					>
						<MenuItem value="">Выберите модель</MenuItem>
						{models.map(model => (
							<MenuItem key={model.id} value={model.id}>
								{model.name}
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

					<TextField
						fullWidth
						label="Кузов"
						margin="normal"
						value={formData.bodyTypeId}
						onChange={e => handleChange('bodyTypeId', e.target.value)}
						error={!!errors.bodyTypeId}
						helperText={errors.bodyTypeId}
						select
						disabled={!brand}
					>
						<MenuItem value="">Выберите кузов</MenuItem>
						{carsBodyTypeData.map(model => (
							<MenuItem key={model.id} value={model.id}>
								{model.name}
							</MenuItem>
						))}
					</TextField>

					<FormControl
						fullWidth
						margin="normal"
						error={!!errors.orderCategoryIds}
					>
						<InputLabel>Категории</InputLabel>
						<Select
							multiple
							value={formData.orderCategoryIds}
							onChange={e => {
								const value = e.target.value as string[];
								if (value.length <= 2) {
									handleChange('orderCategoryIds', value);
									handleChange('orderServiceIds', []); // Сбросить выбранные услуги
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
										formData.orderCategoryIds.length >= 2 &&
										!formData.orderCategoryIds.includes(cat.id)
									}
								>
									<Checkbox
										checked={formData.orderCategoryIds.includes(cat.id)}
									/>
									<ListItemText primary={cat.name} />
								</MenuItem>
							))}
						</Select>
					</FormControl>

					<FormControl
						fullWidth
						margin="normal"
						error={!!errors.orderServiceIds}
					>
						<InputLabel>Услуги</InputLabel>
						<Select
							multiple
							value={formData.orderServiceIds}
							onChange={e => handleChange('orderServiceIds', e.target.value)}
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
									<Checkbox
										checked={formData.orderServiceIds.includes(srv.id)}
									/>
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
		</Box>
	);
};
