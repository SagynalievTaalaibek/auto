import axiosApi from '@/shared/config/axioxApi';
import { API_ROUTES } from '@/shared/constants/constants';
import { IUser } from '@/shared/types/user';

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
