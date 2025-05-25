export type UserRole = 'REGULAR' | 'ADMIN' | 'MASTER';

export interface IUser {
	id: string;
	email: string;
	password: string;
	name: string;
	phone: string;
	role: UserRole;

	isVerified: boolean;
	isTwoFactorEnabled: boolean;

	specialization?: string;
	avatarUrl?: string;

	createdAt: string; // ISO string
	updatedAt: string;
}

export type TokenType = 'VERIFICATION' | 'TWO_FACTOR' | 'PASSWORD_RESET';

export interface Token {
	id: string;
	email: string;
	token: string;
	type: TokenType;
	expiresIn: string;
	createdAt: string;
}
