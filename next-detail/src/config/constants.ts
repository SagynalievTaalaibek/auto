export const BASE_URL =
	process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:4000';
export const ROUTES = {
	HOME: '/',
	LOGIN: '/auth/login',
	REGISTER: '/auth/register',
};

export const API_ROUTES = {
	LOGIN: '/auth/login',
	REGISTER: '/auth/register',
};
