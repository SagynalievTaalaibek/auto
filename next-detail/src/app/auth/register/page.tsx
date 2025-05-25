import Link from 'next/link';

import { AuthLayout, RegisterForm } from '@/components';
import { ROUTES } from '@/shared/constants/constants';

export default function Page() {
	return (
		<AuthLayout
			title="Регистрация"
			description="Чтобы войти на сайт введите ваш email и пароль"
			form={<RegisterForm />}
			footerText={
				<>
					Уже есть аккаунт? <Link href={ROUTES.LOGIN}>Войти</Link>
				</>
			}
		/>
	);
}
