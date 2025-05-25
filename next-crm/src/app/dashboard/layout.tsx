'use client';

import React from 'react';

import Box from '@mui/material/Box';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';

import { selectUser } from '@/features/auth/authSlice';

import { LoadingScreen } from '@/components';
import { getNavigationByRole } from '@/shared/constants/navigations';
import { useAppSelector } from '@/shared/hooks/hooksStore';
import theme from '@/shared/theme/theme';

export default function Layout({ children }: { children: React.ReactNode }) {
	const user = useAppSelector(selectUser);

	if (!user) return <LoadingScreen />;
	const navigation = getNavigationByRole('ADMIN');

	return (
		<AppProvider
			branding={{
				logo: '',
				title: 'DETAILING KG',
				homeUrl: '/dashboard',
			}}
			navigation={navigation}
			theme={theme}
		>
			<DashboardLayout>
				<Box sx={{ flexGrow: 1, p: 3 }}>{children}</Box>
			</DashboardLayout>
		</AppProvider>
	);
}
