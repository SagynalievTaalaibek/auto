'use client';

import { useEffect } from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import { useSearchParams } from 'next/navigation';

import { AuthLayout } from '@/components';
import { useVerificationMutation } from '@/shared/hooks/useVerificationMutation';

export function NewVerificationForm() {
	const searchParams = useSearchParams();
	const token = searchParams.get('token');

	const { verification } = useVerificationMutation();

	useEffect(() => {
		verification(token);
	}, [token]);

	return (
		<AuthLayout
			form={
				<div>
					<CircularProgress />
				</div>
			}
			title={'Подтверждение почты'}
			description={''}
			footerText={''}
		/>
	);
}
