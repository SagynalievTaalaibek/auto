'use client';

import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';

import { registerUser } from '@/features/auth/authThunks';

import { useAppDispatch } from '@/hooks/hooksStore';
import { useAppSnackbar } from '@/hooks/useAppSnackbar';

import { RegisterSchema, TypeRegisterSchema } from '@/schemas';

export function RegisterForm() {
	const dispatch = useAppDispatch();
	const { showSnackbar } = useAppSnackbar();

	const [values, setValues] = useState<TypeRegisterSchema>({
		name: '',
		email: '',
		phone: '',
		password: '',
		passwordRepeat: '',
	});

	const [errors, setErrors] = useState<
		Partial<Record<keyof TypeRegisterSchema, string>>
	>({});
	const [isPending, setIsPending] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, [e.target.name]: e.target.value });
		setErrors({ ...errors, [e.target.name]: undefined });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const result = RegisterSchema.safeParse(values);

		if (!result.success) {
			const fieldErrors: Partial<Record<keyof TypeRegisterSchema, string>> = {};
			result.error.errors.forEach(err => {
				const path = err.path[0] as keyof TypeRegisterSchema;
				fieldErrors[path] = err.message;
			});
			setErrors(fieldErrors);
			return;
		}

		setIsPending(true);

		// Здесь можно отправить запрос, пока просто выводим

		const response = await dispatch(registerUser(values));

		if (response.payload) {
			console.log('here');
			showSnackbar(response.payload.message, 'success', 10000);
		}
	};

	return (
		<Box
			component="form"
			onSubmit={handleSubmit}
			noValidate
			sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}
		>
			<TextField
				label="Имя"
				name="name"
				value={values.name}
				onChange={handleChange}
				error={!!errors.name}
				helperText={errors.name}
			/>

			<TextField
				label="Почта"
				name="email"
				type="email"
				value={values.email}
				onChange={handleChange}
				error={!!errors.email}
				helperText={errors.email}
			/>

			<TextField
				label="Номер"
				name="phone"
				type="tel"
				value={values.phone}
				onChange={handleChange}
				error={!!errors.phone}
				helperText={errors.phone}
			/>

			<TextField
				label="Пароль"
				name="password"
				type="password"
				value={values.password}
				onChange={handleChange}
				error={!!errors.password}
				helperText={errors.password}
			/>

			<TextField
				label="Повторите пароль"
				name="passwordRepeat"
				type="password"
				value={values.passwordRepeat}
				onChange={handleChange}
				error={!!errors.passwordRepeat}
				helperText={errors.passwordRepeat}
			/>

			<Button
				type="submit"
				variant="contained"
				color="primary"
				disabled={isPending}
			>
				{isPending ? <CircularProgress size={24} /> : 'Создать аккаунт'}
			</Button>
		</Box>
	);
}
