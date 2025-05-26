import { Box, Typography } from '@mui/material';

import { InventoryTable } from '@/components/dashboard/inventory/inventory-table';

import { LoadingScreen } from '@/components';

export default function Page() {
	const loading = false;

	return (
		<Box>
			<Typography variant="h4" sx={{ fontWeight: 600 }} gutterBottom>
				Склад материалов
			</Typography>

			{loading ? <LoadingScreen /> : <InventoryTable />}
		</Box>
	);
}
