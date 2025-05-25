'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { logoutUser } from '@/features/auth/authThunks';

import { ROUTES } from '@/shared/constants/constants';
import { useAppDispatch } from '@/shared/hooks/hooksStore';

export default function Page() {
	const dispatch = useAppDispatch();
	const router = useRouter();

	useEffect(() => {
		dispatch(logoutUser());
		router.push(ROUTES.LOGIN);
	}, [dispatch, router]);

	return null;
}
