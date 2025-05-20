import BarChartIcon from '@mui/icons-material/BarChart';
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PlagiarismIcon from '@mui/icons-material/Plagiarism';
import SettingsIcon from '@mui/icons-material/Settings';
import TopicIcon from '@mui/icons-material/Topic';

export const BASE_URL =
	process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:4000';
export const ROUTES = {
	DASHBOARD: '/dashboard',
	PROFILE: '/profile',
	LOGIN: '/',
	EMAIL_CONFIRMATION: 'auth/email-confirmation',
};

export const API_ROUTES = {
	LOGIN: '/auth/login',
	REGISTER: '/auth/register',
	EMAIL_CONFIRMATION: 'auth/email-confirmation',
};

export const dashboardAdminRouters = [
	{
		id: 'dashboard_1',
		title: 'Рабочий стол',
		tooltip: 'Рабочий стол',
		url: '',
		icon: HomeIcon,
	},
	{
		id: 'dashboard_2',
		title: 'Склад',
		tooltip: 'Склад',
		url: 'inventory',
		icon: InventoryIcon,
	},
	{
		id: 'dashboard_3',
		title: 'Заказы',
		tooltip: 'Заказы',
		url: 'orders',
		icon: TopicIcon,
	},
	{
		id: 'dashboard_4',
		title: 'Аналитика',
		tooltip: 'Аналитика',
		url: 'analytics',
		icon: BarChartIcon,
	},
	{
		id: 'dashboard_5',
		title: 'Настройка',
		tooltip: 'Настройка',
		url: 'settings',
		icon: SettingsIcon,
	},
];

export const dashboardSuperAdminRoutes = [
	{
		id: 'page_admin_1',
		title: 'Персонал',
		tooltip: 'Добавить персонал',
		url: 'staff',
		icon: PersonAddIcon,
	},
	{
		id: 'page_admin_2',
		title: 'Отчет',
		tooltip: 'Отчет',
		url: 'reports',
		icon: PlagiarismIcon,
	},
];
