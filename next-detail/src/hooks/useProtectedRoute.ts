import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { UserRole } from '@/types/user';

import { useAppSelector } from '@/store/hooks';

export function useProtectedRoute({ role }: { role: UserRole }) {
	const router = useRouter();
	const { user, isAuthenticated } = useAppSelector(state => state.user);

	useEffect(() => {
		if (!isAuthenticated || user?.role !== role) {
			router.push('/auth/login');
		}
	}, [isAuthenticated, user, role, router]);
}
