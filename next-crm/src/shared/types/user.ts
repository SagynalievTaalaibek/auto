export type UserRole = 'REGULAR' | 'ADMIN';
export type AuthMethod = 'CREDENTIALS' | 'GOOGLE' | 'YANDEX';

export interface IUser {
	id: string;
	email: string;
	password: string;

	name: string;
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

export interface UserAuth {
	userId: string;
	role: UserRole;
}
