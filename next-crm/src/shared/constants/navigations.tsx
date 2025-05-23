import BarChartIcon from '@mui/icons-material/BarChart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import type { Navigation } from '@toolpad/core/AppProvider';

import { UserRole } from '@/shared/types/user';

export function getNavigationByRole(role: UserRole): Navigation {
	const baseNavigation: Navigation = [
		{ kind: 'header', title: 'Основное' },
		{ segment: 'dashboard', title: 'Рабочий стол', icon: <DashboardIcon /> },
		{ segment: 'dashboard/inventory', title: 'Склад', icon: <InventoryIcon /> },
		{
			segment: 'dashboard/orders',
			title: 'Заказы',
			icon: <ShoppingCartIcon />,
		},
		{ segment: 'analytics', title: 'Аналитика', icon: <BarChartIcon /> },
		{ segment: 'settings', title: 'Настройка', icon: <SettingsIcon /> },
	];

	const adminNavigation: Navigation = [
		{ kind: 'divider' },
		{ kind: 'header', title: 'Администрирование' },
		{ segment: 'staff', title: 'Персонал', icon: <PersonAddIcon /> },
		{ segment: 'reports', title: 'Отчет', icon: <BarChartIcon /> },
	];

	if (role === 'ADMIN') {
		return [...baseNavigation, ...adminNavigation];
	}

	return baseNavigation;
}
