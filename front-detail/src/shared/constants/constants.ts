export const ROUTES = {
	LOGIN: '/auth/login',
	REGISTER: '/auth/register',
	NEW_VERIFICATION: '/auth/new-verification',
	HOME: '/',
	PROFILE: '/profile',
	PROFILE_ORDER: '/profile/order',

	// CLIENTS
	ABOUT: '/about',
	SERVICES_CLIENT: '/services',
	CONTACTS: '/contacts',

	// ADMIN
	DASHBOARD: '/crm/dashboard',
	DASHBOARD_ORDER: '/crm/dashboard/orders',
	DASHBOARD_STAFF: '/crm/dashboard/staff',
	DASHBOARD_SERVICES: '/crm/dashboard/services',
	DASHBOARD_ANALYTICS: '/crm/dashboard/analytics',
	DASHBOARD_INVENTORY: '/crm/dashboard/inventory',
	DASHBOARD_REPORTS: '/crm/dashboard/reports',
	DASHBOARD_SETTINGS: '/crm/dashboard/settings',

	DASHBOARD_ORDER_INFO: '/crm/dashboard/orders/info',
	DASHBOARD_ORDER_EDIT: '/crm/dashboard/orders/edit',
	DASHBOARD_ORDER_MY: '/crm/dashboard/orders/my',
	DASHBOARD_ORDER_ADD: '/crm/dashboard/orders/add',
};

export const API_ROUTES = {
	LOGIN: '/auth/login',
	REGISTER: '/auth/register',
	EMAIL_CONFIRMATION: 'auth/email-confirmation',
	LOGOUT: '/auth/logout',
	CHECK_USER: '/auth/me',

	SESSION_CHECK: '/users/session',

	CREATE_ORDER_CRM: '/orders/crm',
	CREATE_ORDER_CLIENT: '/orders/client',
	ORDER_GET_PROFILE: '/orders?profile=true',
	ORDER_GET_CRM: '/orders?crm=true',
	ORDER_GET_ONE: '/orders',
	ORDER_UPDATE: '/orders',
	ORDER_UPDATE_STATUS: '/orders/status',

	USERS_GET_CRM: '/users',
	USERS_GET_MASTERS: '/users/master',
	ASSIGN_ROLE: '/users/admin/assign-role',

	MAIN_SERVICES_GET: '/services/main-services',
	MAIN_SERVICES_CREATE: '/services/main-services',
	SERVICES_CREATE: '/services',

	CARS_GET: '/cars',
	CARS_BODY_TYPE_GET: '/cars/body-type',
};

export const NAVBAR_URL = [
	{ name: 'Домой', path: '/' },
	{ name: 'О нас', path: '/about' },
	{ name: 'Услуги', path: '/services' },
	{ name: 'Контакты', path: '/contacts' },
];
