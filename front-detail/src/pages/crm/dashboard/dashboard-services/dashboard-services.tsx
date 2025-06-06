import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { LoadingScreen } from '../../../../components/ui/loading-screen/loading-screen.tsx';

export const DashboardServices = () => {
	return (
		<Box>
			<Typography variant="h4" sx={{ fontWeight: 600 }} gutterBottom>
				Услуги
			</Typography>
			<LoadingScreen />
		</Box>
	);
};
