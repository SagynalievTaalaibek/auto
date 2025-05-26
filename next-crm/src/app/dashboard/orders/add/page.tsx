import React from 'react';

import { Box, Divider, Typography } from '@mui/material';

import { OrderForm } from '@/components/dashboard/orders/order-form';
import DashboardBreadcrumbs from '@/components/ui/dashboard-breadcrumbs';

export default function Page() {
	return (
		<Box className="container">
			<Box sx={{ mx: 'auto', mt: 4 }}>
				<DashboardBreadcrumbs
					items={[
						{ label: 'Панель управления', href: '/dashboard' },
						{ label: 'Заказы', href: '/dashboard/orders' },
						{ label: 'Создание заказа' },
					]}
				/>
				<Divider sx={{ my: 2 }} />
				<Typography variant="h5" mb={2}>
					Создание заказа
				</Typography>

				<OrderForm />
			</Box>
		</Box>
	);
}
