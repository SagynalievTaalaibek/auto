'use client';

import React from 'react';

import Box from '@mui/material/Box';

import { selectUser } from '@/features/auth/authSlice';

import { SideBar } from '@/components/side-bar/side-bar';

import { TopBar } from '@/components';
import { useAppSelector } from '@/shared/hooks/hooksStore';

export function CrmLayout({ children }: { children: React.ReactNode }) {
	const user = useAppSelector(selectUser);

	return (
		<Box sx={{ display: 'flex' }}>
			{user && (
				<>
					<TopBar />
					<SideBar />
				</>
			)}
			<Box sx={{ flexGrow: 1, py: 3 }}>
				<Box
					sx={{
						margin: '55px 20px 0',
					}}
				>
					{children}
				</Box>
			</Box>
		</Box>
	);
}
