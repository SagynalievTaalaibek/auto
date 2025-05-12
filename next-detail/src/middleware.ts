/*
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { PROTECTED_ROUTES } from '@/config/constants';

type Role = 'REGULAR' | 'ADMIN';

export async function middleware(request: NextRequest) {
	const pathname = request.nextUrl.pathname;
	const sessionCookie = request.cookies.get('session')?.value;

	console.log(pathname, sessionCookie);

	// Пропускаем публичные маршруты
	if (pathname === '/auth/login' || pathname === '/auth/register') {
		return NextResponse.next();
	}

	// Проверяем наличие куки
	if (!sessionCookie) {
		return NextResponse.redirect(new URL('/auth/login', request.url));
	}

	// Парсим куки
	let session: { userId: string; role: Role };
	try {
		session = JSON.parse(sessionCookie);
		console.log('Session', session);
	} catch (error) {
		const response = NextResponse.redirect(new URL('/auth/login', request.url));
		response.cookies.delete('session');
		return response;
	}

	const { userId, role } = session;

	// Проверяем наличие userId и role
	if (!userId || !['REGULAR', 'ADMIN'].includes(role)) {
		const response = NextResponse.redirect(new URL('/auth/login', request.url));
		response.cookies.delete('session');
		return response;
	}

	// Защита админских маршрутов
	if (pathname.startsWith('/admin') && role !== 'ADMIN') {
		return NextResponse.redirect(new URL('/auth/login', request.url));
	}

	const isProtectedRoute = PROTECTED_ROUTES.some(route =>
		pathname.startsWith(route),
	);

	if (isProtectedRoute && role !== 'REGULAR') {
		console.log('Role', role);
		return NextResponse.redirect(new URL('/auth/login', request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ['/admin/:path*', '/booking/:path*', '/profile/:path*'],
};
*/
/*import { type NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {
	const { url, cookies } = request

	const session = cookies.get('session')?.value

	const isAuthPage = url.includes('/auth')

	if (isAuthPage) {
		if (session) {
			return NextResponse.redirect(new URL('/dashboard/settings', url))
		}

		return NextResponse.next()
	}

	if (!session) {
		return NextResponse.redirect(new URL('/auth/login', url))
	}
}*/
/*export const config = {
	matcher: ['/auth/:path*', '/dashboard/:path*']
}*/
import { type NextRequest, NextResponse } from 'next/server';

type Role = 'REGULAR' | 'ADMIN';

export default function middleware(request: NextRequest) {
	const { url, cookies } = request;

	const sessionCookie = cookies.get('session')?.value;

	const isAuthPage = url.includes('/auth');

	let session: { userId: string; role: Role } | null = null;
	if (sessionCookie) {
		try {
			session = JSON.parse(sessionCookie);
		} catch (error) {
			const response = NextResponse.redirect(new URL('/auth/login', url));
			response.cookies.delete('session');
			return response;
		}
	}

	if (isAuthPage) {
		if (session) {
			return NextResponse.redirect(new URL('/dashboard/settings', url));
		}

		return NextResponse.next();
	}

	if (!session) {
		return NextResponse.redirect(new URL('/auth/login', url));
	}

	const { role } = session;

	if (url.includes('/admin') && role !== 'ADMIN') {
		return NextResponse.redirect(new URL('/dashboard', url));
	}

	if (url.includes('/profile') && role !== 'REGULAR') {
		return NextResponse.redirect(new URL('/profile', url));
	}

	return NextResponse.next();
}
