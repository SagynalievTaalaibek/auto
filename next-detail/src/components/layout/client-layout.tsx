'use client';

import Box from '@mui/material/Box';

import { Header } from '@/components';

export function ClientLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="client-layout">
			<Header />
			<Box sx={{ marginTop: '70px' }}>{children}</Box>
			{/*<ClientFooter />*/}
		</div>
	);
}
