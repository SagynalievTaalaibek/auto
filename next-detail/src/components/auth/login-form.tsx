'use client';

import React, { useState } from 'react';

import { Box, Button, CircularProgress, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';

import { loginUser } from '@/features/auth/authThunks';

import { ROUTES } from '@/shared/constants/constants';
import { useAppDispatch } from '@/shared/hooks/hooksStore';
import { useAppSnackbar } from '@/shared/hooks/useAppSnackbar';
import { LoginSchema, TypeLoginSchema } from '@/shared/schemas';

export function LoginForm() {
	const dispatch = useAppDispatch();
	const router = useRouter();
	const { showSnackbar } = useAppSnackbar();

	const [values, setValues] = useState<TypeLoginSchema>({
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
		const result = LoginSchema.safeParse(values);

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
