'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { selectUser } from '@/features/auth/authSlice';

import { AuthLayout, LoginForm } from '@/components';
import { useAppSelector } from '@/shared/hooks/hooksStore';

export default function Page() {
	const router = useRouter();
	const user = useAppSelector(selectUser);

	useEffect(() => {
		if (user) {
			router.push('/dashboard');
		}
	}, [user, router]);

	return (
		<div>
			{!user && (
				<AuthLayout
					title="Вход в систему"
					description="Введите ваш email и пароль для входа в систему"
					form={<LoginForm />}
					footerText={<>Если нету аккаунта, админ должен добавить</>}
				/>
			)}
		</div>
	);
}
