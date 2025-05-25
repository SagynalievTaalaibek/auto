'use client';

import { useEffect } from 'react';

import { Add } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';

import { selectUser } from '@/features/auth/authSlice';
import { selectOrderLoading } from '@/features/order/order.slice';
import { fetchOrdersCRM } from '@/features/order/order.thunks';

import { OrdersTable } from '@/components/dashboard/orders/orders-table';

import { LoadingScreen } from '@/components';
import { ROUTES } from '@/shared/constants/constants';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/hooksStore';

export default function Page() {
	const loading = useAppSelector(selectOrderLoading);
	const dispatch = useAppDispatch();
	const user = useAppSelector(selectUser);

	useEffect(() => {
		dispatch(fetchOrdersCRM());
	}, [dispatch]);

	return (
		<Box>
			<Typography variant="h4" sx={{ fontWeight: 600 }} gutterBottom>
				Заказы
			</Typography>

			<Button
				variant="contained"
				startIcon={<Add />}
				component={Link}
				href={ROUTES.ORDER_ADD}
				sx={{ mb: 2 }}
			>
				Добавить заказ
			</Button>

			{user && user.role === 'MASTER' && (
				<Button
					variant="contained"
					component={Link}
					href={ROUTES.ORDER_MY}
					sx={{ marginLeft: 2, mb: 2 }}
				>
					Мои заказы
				</Button>
			)}

			{loading ? <LoadingScreen /> : <OrdersTable />}
		</Box>
	);
}
