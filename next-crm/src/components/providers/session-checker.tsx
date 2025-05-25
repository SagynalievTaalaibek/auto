'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { logout, selectUser } from '@/features/auth/authSlice';

import axiosApi from '@/shared/config/axiosApi';
import { API_ROUTES, ROUTES } from '@/shared/constants/constants';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/hooksStore';

export function SessionChecker() {
	const user = useAppSelector(selectUser);
	const dispatch = useAppDispatch();
	const router = useRouter();

	useEffect(() => {
		if (!user) return;

		const checkSession = async () => {
			try {
				const res = await axiosApi.get(API_ROUTES.SESSION_CHECK);
				if (!res.data) {
					dispatch(logout());
					router.replace(ROUTES.LOGIN);
				}
			} catch (err) {
				dispatch(logout());
				console.log(err);
				router.replace(ROUTES.LOGIN);
			}
		};

		void checkSession();
	}, [user, dispatch]);

	return null;
}
