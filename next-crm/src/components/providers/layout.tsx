'use client';

import React from 'react';

import { SessionChecker } from '@/components/providers/session-checker';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<SessionChecker />
			{children}
		</>
	);
}
