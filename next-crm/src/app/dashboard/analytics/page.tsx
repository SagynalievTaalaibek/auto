import { Box, Typography } from '@mui/material';

import { AnalyticsPage } from '@/components/dashboard/analytics/analytics-page';

import { LoadingScreen } from '@/components';

export default function Page() {
	const loading = false;

	return (
		<Box>
			<Box>
				<Typography variant="h4" sx={{ fontWeight: 600 }} gutterBottom>
					Аналитика бизнеса
				</Typography>

				{loading ? <LoadingScreen /> : <AnalyticsPage />}
			</Box>
		</Box>
	);
}
