import { useEffect } from 'react';

import { Phone } from '@mui/icons-material';
import { Card, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { CompanyAbout } from '../../../components/client/profile/company-about.tsx';
import { OrdersTable } from '../../../components/client/profile/orders-table.tsx';
import { SettingsProfile } from '../../../components/client/profile/settings-profile.tsx';
import { LoadingScreen } from '../../../components/ui/loading-screen/loading-screen.tsx';
import { selectOrdersLoading } from '../../../features/orders/orders.slice.ts';
import { fetchOrderProfile } from '../../../features/orders/orders.thunks.ts';
import {
	useAppDispatch,
	useAppSelector,
} from '../../../shared/hooks/hooksStore.ts';

export const Profile = () => {
	const dispatch = useAppDispatch();
	const loading = useAppSelector(selectOrdersLoading);

	useEffect(() => {
		dispatch(fetchOrderProfile());
	}, [dispatch]);

	return (
		<Box className="container" sx={{ marginTop: '70px' }}>
			<CompanyAbout />
			<SettingsProfile />
			{loading ? <LoadingScreen /> : <OrdersTable />}
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
};
