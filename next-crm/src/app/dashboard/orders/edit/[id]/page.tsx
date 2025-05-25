'use client';

import React, { useEffect } from 'react';

import { Box, Typography } from '@mui/material';
import { useParams } from 'next/navigation';

export default function Page() {
	const params = useParams();
	const orderId = params?.id;

	useEffect(() => {
		console.log('Редактируем заказ с ID:', orderId);
	}, [orderId]);

	return (
		<Box sx={{ maxWidth: 700, mx: 'auto', mt: 5 }}>
			<Typography variant="h4" gutterBottom>
				Редактирование заказа
			</Typography>
			<Typography>Текущий ID заказа: {orderId}</Typography>
		</Box>
	);
}
