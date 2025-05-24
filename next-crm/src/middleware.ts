import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { ROUTES } from '@/shared/constants/constants';

export async function middleware(req: NextRequest) {
	const { pathname } = req.nextUrl;
	const { cookies } = req;

	if (pathname.startsWith('/_next') || pathname === ROUTES.LOGIN) {
		return NextResponse.next();
	}

	const session = cookies.get('session')?.value;

	if (!session) {
		return NextResponse.redirect(new URL(ROUTES.LOGIN, req.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ['/dashboard/:path*'],
};
