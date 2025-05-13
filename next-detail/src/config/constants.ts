export const BASE_URL =
	process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:4000';
export const ROUTES = {
	HOME: '/',
	LOGIN: '/auth/login',
	REGISTER: '/auth/register',
};

export const ROUTE_URL = [
	{ name: 'Домой', path: '/' },
	{ name: 'Профиль', path: '/profile' },
	{ name: 'Услуги', path: '/services' },
];

export const API_ROUTES = {
	LOGIN: '/auth/login',
	REGISTER: '/auth/register',
};
