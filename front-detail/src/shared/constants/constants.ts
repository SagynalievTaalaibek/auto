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
	DASHBOARD: '/dashboard',
	ORDER: '/dashboard/orders',
	STAFF: '/dashboard/staff',
	SERVICES: '/dashboard/services',

	ORDER_INFO: '/dashboard/orders/info/',
	ORDER_EDIT: '/dashboard/orders/edit/',
	ORDER_MY: '/dashboard/orders/my',
	ORDER_ADD: '/dashboard/orders/add',
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
