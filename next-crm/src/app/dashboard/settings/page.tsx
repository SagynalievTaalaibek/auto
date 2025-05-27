import { Box, Typography } from '@mui/material';

import { SettingsPage } from '@/components/dashboard/services/settings-page';

import { LoadingScreen } from '@/components';

export default function Page() {
	const loading = false;

	return (
		<Box>
			<Box>
				<Typography variant="h4" sx={{ fontWeight: 600 }} gutterBottom>
					Настройка
				</Typography>

				{loading ? <LoadingScreen /> : <SettingsPage />}
			</Box>
		</Box>
	);
}
