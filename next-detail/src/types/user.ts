export type UserRole = 'REGULAR' | 'ADMIN';
export type AuthMethod = 'CREDENTIALS' | 'GOOGLE' | 'YANDEX';

export interface User {
	id: string;
	email: string;
	password: string;

	displayName: string;
	picture?: string | null;

	role: UserRole;

	isVerified: boolean;
	isTwoFactorEnabled: boolean;

	method: AuthMethod;

	createdAt: string;
	updatedAt: string;
}

export interface LoginPayload {
	email: string;
	password: string;
	code?: string;
}

export interface RegisterPayload {
	name: string;
	email: string;
	password: string;
	passwordRepeat: string;
}
