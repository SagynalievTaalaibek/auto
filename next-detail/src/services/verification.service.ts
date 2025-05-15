import { IUser } from '@/types/user';

import axiosApi from '@/config/axioxApi';
import { API_ROUTES } from '@/config/constants';

class VerificationService {
	public async newVerification(token: string | null) {
		const response = await axiosApi.post<IUser>(API_ROUTES.EMAIL_CONFIRMATION, {
			token,
		});
		console.log('Verification service', response);
		return response;
	}
}

export const verificationService = new VerificationService();
