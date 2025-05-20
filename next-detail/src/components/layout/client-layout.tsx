'use client';

import { Header } from '@/components';

export function ClientLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="client-layout">
			<Header />
			<div>{children}</div>
			{/*<ClientFooter />*/}
		</div>
	);
}
