import { IUser } from '@/types/user';

import axiosApi from '@/config/axioxApi';

class VerificationService {
	public async newVerification(token: string | null) {
		const response = await axiosApi.post<IUser>('auth/email-confirmation', {
			token,
		});
		console.log('Verification service', response);
		return response;
	}
}

export const verificationService = new VerificationService();
