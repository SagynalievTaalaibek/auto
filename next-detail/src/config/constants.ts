export const BASE_URL =
	process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:4000';
export const ROUTES = {
	HOME: '/',
	PROFILE: '/profile',
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
	EMAIL_CONFIRMATION: 'auth/email-confirmation',
};
