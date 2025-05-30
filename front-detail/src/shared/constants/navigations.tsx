import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import BarChartIcon from '@mui/icons-material/BarChart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import type { Navigation } from '@toolpad/core/AppProvider';

import type { UserRole } from '../types/user.ts';

export function getNavigationByRole(role: UserRole): Navigation {
	const baseNavigation: Navigation = [
		{ kind: 'header', title: 'Основное' },
		{ segment: 'dashboard', title: 'Рабочий стол', icon: <DashboardIcon /> },
		{ segment: 'dashboard/inventory', title: 'Склад', icon: <InventoryIcon /> },
		{
			segment: 'dashboard/services',
			title: 'Услуги',
			icon: <AddToPhotosIcon />,
		},
		{
			segment: 'dashboard/orders',
			title: 'Заказы',
			icon: <ShoppingCartIcon />,
		},
	];

	const adminNavigation: Navigation = [
		{ kind: 'divider' },
		{ kind: 'header', title: 'Администрирование' },
		{ segment: 'dashboard/staff', title: 'Персонал', icon: <PersonAddIcon /> },
		{
			segment: 'dashboard/analytics',
			title: 'Аналитика',
			icon: <BarChartIcon />,
		},
		{ segment: 'dashboard/reports', title: 'Отчет', icon: <BarChartIcon /> },
		{
			segment: 'dashboard/settings',
			title: 'Настройка',
			icon: <SettingsIcon />,
		},
	];

	const logoutNavigation: Navigation = [
		{ kind: 'divider' },
		{
			segment: 'logout',
			title: 'Выход',
			icon: <LogoutIcon />,
		},
	];

	if (role === 'ADMIN') {
		return [...baseNavigation, ...adminNavigation, ...logoutNavigation];
	}

	return [...baseNavigation, ...logoutNavigation];
}
