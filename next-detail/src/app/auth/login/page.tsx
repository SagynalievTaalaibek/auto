import { Metadata } from 'next';
import Link from 'next/link';

import { AuthLayout } from '@/components/auth/auth-layout';

import { LoginForm } from '@/components';
import { ROUTES } from '@/config/constants';

export const metadata: Metadata = {
	title: 'Войти в аккаунт',
};

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
