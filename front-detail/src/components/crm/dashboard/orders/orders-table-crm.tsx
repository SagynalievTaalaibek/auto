import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
	Box,
	Button,
	FormControl,
	MenuItem,
	Select,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TextField,
	Tooltip,
} from '@mui/material';

import { selectOrdersCRM } from '../../../../features/orders/orders.slice.ts';
import {
	changeOrderStatus,
	fetchOrdersCRM,
} from '../../../../features/orders/orders.thunks.ts';
import { ROUTES } from '../../../../shared/constants/constants.ts';
import {
	useAppDispatch,
	useAppSelector,
} from '../../../../shared/hooks/hooksStore.ts';
import { useAppSnackbar } from '../../../../shared/hooks/useAppSnackbar.tsx';

const statusOptions = [
	'ALL',
	'NEW',
	'IN_PROGRESS',
	'COMPLETED',
	'PAID',
	'CLOSED',
	'CANCELLED',
	'RESCHEDULED',
];

export function OrdersTableCrm() {
	const dispatch = useAppDispatch();
	const router = useNavigate();
	const { showSnackbar } = useAppSnackbar();

	const orders = useAppSelector(selectOrdersCRM);

	const [statusFilter, setStatusFilter] = useState('ALL');
	const [emailFilter, setEmailFilter] = useState('');
	const [nameFilter, setNameFilter] = useState('');
	const [sortAsc, setSortAsc] = useState(true);

	const handleStatusChange = async (orderId: string, newStatus: string) => {
		await dispatch(changeOrderStatus({ status: newStatus, id: orderId }));

		showSnackbar('Статус обновлен', 'success');
		dispatch(fetchOrdersCRM());
	};

	const filteredOrders = useMemo(() => {
		let result = [...orders];

		if (statusFilter !== 'ALL') {
			result = result.filter(order => order.status === statusFilter);
		}

		if (emailFilter.trim()) {
			result = result.filter(order =>
				order.user.email.toLowerCase().includes(emailFilter.toLowerCase()),
			);
		}

		if (nameFilter.trim()) {
			result = result.filter(order =>
				order.user.name.toLowerCase().includes(nameFilter.toLowerCase()),
			);
		}

		result.sort((a, b) => {
			const dateA = new Date(a.createdAt).getTime();
			const dateB = new Date(b.createdAt).getTime();
			return sortAsc ? dateA - dateB : dateB - dateA;
		});

		return result;
	}, [statusFilter, emailFilter, nameFilter, sortAsc, orders]);

	return (
		<Box sx={{ width: '100%', p: 2 }}>
			{/* Фильтры */}
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					gap: 2,
					alignItems: 'center',
					mb: 2,
				}}
			>
				<TextField
					select
					label="Статус"
					value={statusFilter}
					onChange={e => setStatusFilter(e.target.value)}
					size="small"
				>
					{statusOptions.map(status => (
						<MenuItem key={status} value={status}>
							{status}
						</MenuItem>
					))}
				</TextField>

				<TextField
					label="Email"
					value={emailFilter}
					onChange={e => setEmailFilter(e.target.value)}
					size="small"
				/>

				<TextField
					label="Клиент"
					value={nameFilter}
					onChange={e => setNameFilter(e.target.value)}
					size="small"
				/>

				<Tooltip title={'Сортировка по дате'}>
					<Button
						onClick={() => setSortAsc(!sortAsc)}
						variant="outlined"
						sx={{ flexWrap: 'nowrap' }}
					>
						Дата {sortAsc ? '↑' : '↓'}
					</Button>
				</Tooltip>
			</Box>

			{/* Таблица */}
			<TableContainer>
				<Table size="small">
					<TableHead>
						<TableRow>
							<TableCell>Клиент</TableCell>
							<TableCell>Email</TableCell>
							<TableCell>Телефон</TableCell>
							<TableCell>Авто</TableCell>
							<TableCell>Цвет</TableCell>
							<TableCell>Статус</TableCell>
							<TableCell>Создан</TableCell>
							<TableCell>Действия</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{filteredOrders.map(order => (
							<TableRow key={order.id}>
								<TableCell>{order.user.name}</TableCell>
								<TableCell>{order.user.email}</TableCell>
								<TableCell>{order.user.phone}</TableCell>
								<TableCell>{`${order.modelCar.brand.name} ${order.modelCar.name} ${order.carYear}`}</TableCell>
								<TableCell>{order.carColor}</TableCell>
								<TableCell>
									<FormControl fullWidth size="small">
										<Select
											value={order.status}
											onChange={e =>
												handleStatusChange(order.id, e.target.value)
											}
										>
											{statusOptions
												.filter(status => status !== 'ALL')
												.map(status => (
													<MenuItem key={status} value={status}>
														{status}
													</MenuItem>
												))}
										</Select>
									</FormControl>
								</TableCell>
								<TableCell>
									{new Date(order.createdAt).toLocaleString()}
								</TableCell>
								<TableCell>
									<Box sx={{ display: 'flex', gap: 1 }}>
										<Button
											size="small"
											variant="contained"
											onClick={() =>
												router(`${ROUTES.DASHBOARD_ORDER_INFO}/${order.id}`)
											}
										>
											Подробнее
										</Button>
										<Button
											size="small"
											variant="outlined"
											color="secondary"
											onClick={() =>
												router(`${ROUTES.DASHBOARD_ORDER_EDIT}/${order.id}`)
											}
										>
											Редактировать
										</Button>
									</Box>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
}
