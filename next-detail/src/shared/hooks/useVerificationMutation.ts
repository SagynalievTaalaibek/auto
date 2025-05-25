import { useMutation } from '@tanstack/react-query';

import { useRouter } from 'next/navigation';

import { saveUser } from '@/features/auth/authSlice';

import { verificationService } from '../services';

import { ROUTES } from '@/shared/constants/constants';
import { useAppDispatch } from '@/shared/hooks/hooksStore';
import { useAppSnackbar } from '@/shared/hooks/useAppSnackbar';

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
