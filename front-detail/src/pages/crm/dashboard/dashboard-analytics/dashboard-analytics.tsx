import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { AnalyticsPage } from '../../../../components/crm/dashboard/analytics/analytics-page.tsx';
import { LoadingScreen } from '../../../../components/ui/loading-screen/loading-screen.tsx';

export const DashboardAnalytics = () => {
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
};
