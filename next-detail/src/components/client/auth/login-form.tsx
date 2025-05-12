'use client';

import React, { useState } from 'react';

import { Box, Button, CircularProgress, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';
import { z } from 'zod';

import { loginUser } from '@/features/auth/authThunks';

import { useAppSnackbar } from '@/hooks/useAppSnackbar';

import { LoginPayload } from '@/types/user';

import { ROUTES } from '@/config/constants';
import { useAppDispatch } from '@/store/hooks';

const loginSchema = z.object({
	email: z
		.string({ required_error: 'Email обязателен' })
		.email('Неверный email'),
	password: z
		.string({ required_error: 'Пароль обязателен' })
		.min(6, 'Пароль должен быть не менее 6 символов'),
});

export function LoginForm() {
	const dispatch = useAppDispatch();
	const router = useRouter();
	const { showSnackbar } = useAppSnackbar();

	const [values, setValues] = useState<LoginPayload>({
		email: '',
		password: '',
	});
	const [errors, setErrors] = useState<{ email?: string; password?: string }>(
		{},
	);
	const [isPending, setIsPending] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, [e.target.name]: e.target.value });
		setErrors({ ...errors, [e.target.name]: undefined });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const result = loginSchema.safeParse(values);

		if (!result.success) {
			const fieldErrors: Record<string, string> = {};
			result.error.errors.forEach(err => {
				if (err.path[0]) fieldErrors[err.path[0]] = err.message;
			});
			setErrors(fieldErrors);
			return;
		}

		setIsPending(true);

		try {
			await dispatch(loginUser(values)).unwrap();
			showSnackbar('Вы успешно вошли!', 'success');
			setErrors({});
			router.push(ROUTES.HOME);
		} catch (err) {
			console.log(err);
			showSnackbar('Неверный email или пароль', 'error');
			setErrors({ email: 'Неверный email или пароль' });
		}
		setIsPending(false);
	};

	return (
		<Box
			component="form"
			onSubmit={handleSubmit}
			display="flex"
			flexDirection="column"
			gap={2}
		>
			<TextField
				label="Email"
				name="email"
				value={values.email}
				onChange={handleChange}
				error={!!errors.email}
				helperText={errors.email}
				fullWidth
				placeholder="admin@gmail.com"
			/>

			<TextField
				label="Пароль"
				name="password"
				type="password"
				value={values.password}
				onChange={handleChange}
				error={!!errors.password}
				helperText={errors.password}
				fullWidth
				placeholder="******"
			/>

			<Button
				variant="contained"
				type="submit"
				disabled={isPending}
				fullWidth
				sx={{ mt: 1 }}
			>
				{isPending ? <CircularProgress size={24} color="inherit" /> : 'Войти'}
			</Button>
		</Box>
	);
}
