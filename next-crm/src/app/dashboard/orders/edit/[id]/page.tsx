'use client';

import React, { useEffect } from 'react';

import { Box, Divider, Typography } from '@mui/material';
import { useParams } from 'next/navigation';

import { selectOrderLoading } from '@/features/order/order.slice';
import { fetchOneOrderUpdate } from '@/features/order/order.thunks';

import { OrderForm } from '@/components/dashboard/orders/order-form';
import DashboardBreadcrumbs from '@/components/ui/dashboard-breadcrumbs';

import { LoadingScreen } from '@/components';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/hooksStore';

export default function Page() {
	const params = useParams();
	const orderId = params?.id;
	const dispatch = useAppDispatch();

	const loadingOrder = useAppSelector(selectOrderLoading);

	useEffect(() => {
		if (orderId) {
			dispatch(fetchOneOrderUpdate(orderId as string));
		}
	}, [dispatch, orderId]);

	return (
		<Box className="container">
			<Box sx={{ mx: 'auto', mt: 4 }}>
				<DashboardBreadcrumbs
					items={[
						{ label: 'Панель управления', href: '/dashboard' },
						{ label: 'Заказы', href: '/dashboard/orders' },
						{ label: 'Редактирование заказа' },
					]}
				/>
				<Divider sx={{ my: 2 }} />
				<Typography variant="h5" mb={2}>
					Редактирование заказа
				</Typography>

				{loadingOrder ? (
					<LoadingScreen />
				) : (
					<OrderForm orderId={orderId as string} />
				)}
			</Box>
		</Box>
	);
}
