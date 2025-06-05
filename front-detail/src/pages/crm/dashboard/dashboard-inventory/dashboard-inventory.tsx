import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { InventoryTable } from '../../../../components/crm/dashboard/inventory/inventory-table.tsx';
import { LoadingScreen } from '../../../../components/ui/loading-screen/loading-screen.tsx';

export const DashboardInventory = () => {
	const loading = false;

	return (
		<Box>
			<Typography variant="h4" sx={{ fontWeight: 600 }} gutterBottom>
				Склад материалов
			</Typography>

			{loading ? <LoadingScreen /> : <InventoryTable />}
		</Box>
	);
};
