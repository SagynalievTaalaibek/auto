import { Box, Typography } from '@mui/material';

import { ReportsPage } from '@/components/dashboard/reports/reports-page';

import { LoadingScreen } from '@/components';

export default function Page() {
	const loading = false;

	return (
		<Box>
			<Box>
				<Typography variant="h4" sx={{ fontWeight: 600 }} gutterBottom>
					📊 Системные отчеты
				</Typography>

				{loading ? <LoadingScreen /> : <ReportsPage />}
			</Box>
		</Box>
	);
}
