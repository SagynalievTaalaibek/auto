'use client';

import { useEffect } from 'react';

import { Phone } from '@mui/icons-material';
import { Box, Card, Stack, Typography } from '@mui/material';

import { fetchOrderProfile } from '@/features/order/order.thunks';

import { CompanyAbout, Orders, SettingsProfile } from '@/components';
import { useAppDispatch } from '@/shared/hooks/hooksStore';

export default function Page() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchOrderProfile());
	}, [dispatch]);

	return (
		<Box className="container">
			<CompanyAbout />
			<SettingsProfile />
			<Orders />

			<Box sx={{ mt: 4 }}>
				<Card sx={{ p: 3, backgroundColor: '#fff8e1' }}>
					<Typography variant="h6" gutterBottom>
						Отмена заказа
					</Typography>
					<Typography variant="body2" color="text.secondary" mb={1}>
						Если вы хотите отменить или изменить ваш заказ, пожалуйста,
						свяжитесь с нами по телефону как можно раньше.
					</Typography>
					<Stack direction="row" alignItems="center" spacing={1}>
						<Phone fontSize="small" />
						<Typography variant="body1" fontWeight={500}>
							+996 700 123 456
						</Typography>
					</Stack>
				</Card>
			</Box>
		</Box>
	);
}
