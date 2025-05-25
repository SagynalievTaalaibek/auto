'use client';

import React, { useEffect } from 'react';

import { Box, Chip, Divider, Stack, Typography } from '@mui/material';
import { useParams, useRouter } from 'next/navigation';

import { selectUser } from '@/features/auth/authSlice';
import {
	selectOneOrder,
	selectOrderLoading,
} from '@/features/order/order.slice';
import { fetchOneOrder } from '@/features/order/order.thunks';

import OrderBreadcrumbs from '@/components/ui/order-breadcrumbs';

import { LoadingScreen } from '@/components';
import { ROUTES } from '@/shared/constants/constants';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/hooksStore';

export default function Page() {
	const params = useParams();
	const router = useRouter();
	const dispatch = useAppDispatch();
	const loading = useAppSelector(selectOrderLoading);
	const order = useAppSelector(selectOneOrder);
	const user = useAppSelector(selectUser);

	const orderId = params?.id;

	useEffect(() => {
		if (orderId) {
			dispatch(fetchOneOrder(orderId as string));
		}
	}, [dispatch, orderId]);

	if (loading) return <LoadingScreen />;

	if (!order) {
		return (
			<Box className="container" sx={{ py: 4 }}>
				<Typography variant="h6" color="error">
					Заказ не найден.
				</Typography>
			</Box>
		);
	}

	const onDeleteOrder = async () => {
		console.log('Удаление заказа:', order.id);
		router.push(ROUTES.ORDER);
	};

	return (
		<Box className="container">
			<Box sx={{ py: 4 }}>
				<OrderBreadcrumbs
					items={[
						{ label: 'Панель управления', href: '/dashboard' },
						{ label: 'Заказы', href: '/dashboard/orders' },
						{ label: 'Детали заказа' },
					]}
				/>

				<Divider sx={{ my: 2 }} />

				{/* Клиент */}
				<Box sx={{ mb: 3 }}>
					<Typography variant="h6" sx={{ fontWeight: 600 }}>
						Клиент
					</Typography>
					{order.user && (
						<>
							<Typography>Имя: {order.user.name}</Typography>
							<Typography>Email: {order.user.email}</Typography>
							<Typography>Телефон: {order.user.phone}</Typography>
						</>
					)}
				</Box>

				{/* Автомобиль */}
				<Box sx={{ mb: 3 }}>
					<Typography variant="h6" sx={{ fontWeight: 600 }}>
						Автомобиль
					</Typography>
					<Typography>
						{order.carBrand} {order.carModel} ({order.carYear})
					</Typography>
					<Typography>Цвет: {order.carColor}</Typography>
				</Box>

				{/* Статус и дата */}
				<Box sx={{ mb: 3 }}>
					<Typography variant="h6" sx={{ fontWeight: 600 }}>
						Статус заказа
					</Typography>
					<Chip
						label={order.status}
						color={order.status === 'NEW' ? 'primary' : 'default'}
						sx={{ mt: 1 }}
					/>
					<Typography sx={{ mt: 2 }}>
						Создан: {new Date(order.createdAt).toLocaleString()}
					</Typography>
				</Box>

				{/* Категории */}
				<Box sx={{ mb: 3 }}>
					<Typography variant="h6" sx={{ fontWeight: 600 }}>
						Категории услуг
					</Typography>
					<Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: 'wrap' }}>
						{order.orderCategories &&
							order.orderCategories.map(cat => (
								<Chip key={cat.id} label={cat.category.name} />
							))}
					</Stack>
				</Box>

				{/* Услуги */}
				<Box sx={{ mb: 3 }}>
					<Typography variant="h6" sx={{ fontWeight: 600 }}>
						Услуги
					</Typography>
					<ul>
						{order.orderServices &&
							order.orderServices.map(serv => (
								<li key={serv.id}>
									<Typography>{serv.service.name}</Typography>
								</li>
							))}
					</ul>
				</Box>

				{/* Цена / время */}
				<Box sx={{ mb: 3 }}>
					<Typography variant="h6" sx={{ fontWeight: 600 }}>
						Дополнительная информация
					</Typography>
					<Typography>
						Мастер: {order.master ? order.master.name : '—'}
					</Typography>
					<Typography>
						Начало работ:{' '}
						{order.startTime ? new Date(order.startTime).toLocaleString() : '—'}
					</Typography>
					<Typography>
						Окончание работ:{' '}
						{order.endTime ? new Date(order.endTime).toLocaleString() : '—'}
					</Typography>
					<Typography>
						Общая стоимость: {order.totalPrice ?? '—'} сом
					</Typography>
					<Typography>Заметка: {order.notes}</Typography>
				</Box>
			</Box>

			<Divider sx={{ my: 4 }} />
			{user && user.role === 'ADMIN' && (
				<Box sx={{ mb: 3 }}>
					<Typography variant="h6" color="error" sx={{ fontWeight: 600 }}>
						Danger Zone
					</Typography>
					<Typography sx={{ mb: 2 }}>
						Будьте осторожны: действия ниже могут быть необратимыми.
					</Typography>
					<Chip
						label="Удалить заказ"
						size="medium"
						color="error"
						variant="outlined"
						clickable
						onClick={() => {
							// TODO: реализовать подтверждение и удаление
							if (
								confirm(
									'Вы уверены, что хотите удалить этот заказ? Это действие необратимо.',
								)
							) {
								void onDeleteOrder();
							}
						}}
					/>
				</Box>
			)}
		</Box>
	);
}
