export const BASE_URL =
	process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:4000';
export const ROUTES = {
	DASHBOARD: '/dashboard',
	PROFILE: '/profile',
	ORDER: '/dashboard/orders',
	LOGIN: '/',
	EMAIL_CONFIRMATION: 'auth/email-confirmation',

	ORDER_INFO: '/dashboard/orders/info/',
	ORDER_EDIT: '/dashboard/orders/edit/',
	ORDER_MY: '/dashboard/orders/my',
	ORDER_ADD: '/dashboard/orders/add',
};

export const API_ROUTES = {
	LOGIN: '/auth/login',
	REGISTER: '/auth/register',
	SESSION_CHECK: '/users/session',

	LOGOUT: '/auth/logout',
	EMAIL_CONFIRMATION: 'auth/email-confirmation',

	CREATE_ORDER_CRM: '/orders/crm',
	ORDER_GET_PROFILE: '/orders?profile=true',
	ORDER_GET_CRM: '/orders?crm=true',
	ORDER_GET_ONE: '/orders',

	USERS_GET_CRM: '/users',
	USERS_GET_MASTERS: '/users/master',
	ASSIGN_ROLE: '/users/admin/assign-role',

	MAIN_SERVICES_GET: '/services/main-services',
	MAIN_SERVICES_CREATE: '/services/main-services',
	SERVICES_CREATE: '/services',
};
