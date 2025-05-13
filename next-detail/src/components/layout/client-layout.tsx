'use client';

import { usePathname } from 'next/navigation';

import { Header } from '@/components';

export function ClientLayout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();

	if (pathname.startsWith('/admin')) {
		return <>{children}</>;
	}

	return (
		<div className="client-layout">
			<Header />
			<main>{children}</main>
			{/*<ClientFooter />*/}
		</div>
	);
}
