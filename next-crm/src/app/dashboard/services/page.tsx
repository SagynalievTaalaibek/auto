import { Box, Typography } from '@mui/material';

import { LoadingScreen } from '@/components';

export default function Page() {
	return (
		<Box>
			<Typography variant="h4" sx={{ fontWeight: 600 }} gutterBottom>
				Услуги
			</Typography>
			<LoadingScreen />
		</Box>
	);
}
