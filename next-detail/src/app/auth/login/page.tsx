import * as React from 'react';

import Link from 'next/link';

import { LoginForm } from '@/components/client';
import { AuthLayout } from '@/components/client/auth/auth-layout';

import { ROUTES } from '@/config/constants';

export default function Page() {
	return (
		<AuthLayout
			title="Вход в систему"
			description="Введите ваш email и пароль для входа в систему"
			form={<LoginForm />}
			footerText={
				<>
					Нет аккаунта? <Link href={ROUTES.REGISTER}>Зарегистрироваться</Link>
				</>
			}
		/>
	);
}
