export const BASE_URL = 'http://localhost:4000';

export const ROUTES = {
	HOME: '/',
	PROFILE: '/profile',
	PROFILE_ORDER: '/profile/order',
	LOGIN: '/auth/login',
	REGISTER: '/auth/register',
	EMAIL_CONFIRMATION: 'auth/email-confirmation',
};

export const NAVBAR_URL = [
	{ name: 'Домой', path: '/' },
	{ name: 'О нас', path: '/about' },
	{ name: 'Услуги', path: '/services' },
	{ name: 'Контакты', path: '/contacts' },
];

export const API_ROUTES = {
	LOGIN: '/auth/login',
	REGISTER: '/auth/register',
	LOGOUT: '/auth/logout',
	EMAIL_CONFIRMATION: 'auth/email-confirmation',

	CREATE_ORDER: '/orders',
	MAIN_SERVICES: '/orders/main-services',
	ORDER_GET_PROFILE: '/orders?profile=true',
};
