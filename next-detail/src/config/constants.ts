export const BASE_URL =
	process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:4000';
export const ROUTES = {
	HOME: '/',
	LOGIN: '/auth/login',
	REGISTER: '/register',
};

export const PROTECTED_ROUTES = ['/GGG', 'GGG'];
