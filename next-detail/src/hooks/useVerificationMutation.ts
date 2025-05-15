import { useMutation } from '@tanstack/react-query';

import { useRouter } from 'next/navigation';

import { saveUser } from '@/features/auth/authSlice';

import { useAppDispatch } from '@/hooks/hooksStore';
import { useAppSnackbar } from '@/hooks/useAppSnackbar';

import { ROUTES } from '@/config/constants';
import { verificationService } from '@/services';

export function useVerificationMutation() {
	const { showSnackbar } = useAppSnackbar();
	const router = useRouter();
	const dispatch = useAppDispatch();

	const { mutate: verification } = useMutation({
		mutationKey: ['new verification'],
		mutationFn: (token: string | null) =>
			verificationService.newVerification(token),
		onSuccess: async response => {
			await dispatch(saveUser(response));
			showSnackbar('Почта успешно подтверждена', 'success');
			router.push(ROUTES.PROFILE);
		},
		onError() {
			router.push(ROUTES.LOGIN);
		},
	});

	return { verification };
}
