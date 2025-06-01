import { createBrowserRouter } from 'react-router-dom';

import NotFound from '../../components/ui/not-found/not-found.tsx';
import { Login } from '../../pages/auth/login/login.tsx';
import { NewVerificationPage } from '../../pages/auth/new-verification/new-verification.tsx';
import { Register } from '../../pages/auth/register/register.tsx';
import { ROUTES } from '../../shared/constants/constants.ts';
import ClientLayout from '../layout/client-layout.tsx';
import CrmLayout from '../layout/crm-layout.tsx';
import RootLayout from '../layout/root-layout.tsx';
import { ProtectedRoute } from '../protect/protect-route.tsx';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				path: '/',
				element: <ClientLayout />,
				children: [
					{ index: true, element: 'HOME CLIENT' },
					{ path: ROUTES.ABOUT, element: 'HOME CLIENT' },
					{ path: ROUTES.SERVICES_CLIENT, element: 'SERVICES' },
					{ path: ROUTES.CONTACTS, element: 'CONTACTS' },
					{ path: ROUTES.LOGIN, element: <Login /> },
					{ path: ROUTES.REGISTER, element: <Register /> },
				],
			},

			{
				path: `${ROUTES.NEW_VERIFICATION}/:token`,
				element: <NewVerificationPage />,
			},

			// Admin route
			{
				path: 'crm',
				element: (
					<ProtectedRoute roles={['ADMIN', 'MASTER']}>
						<CrmLayout />
					</ProtectedRoute>
				),
				children: [
					{ index: true, element: 'ADMIN DASHBOARD' },
					{
						path: '/crm/reports',
						element: (
							<ProtectedRoute roles={['ADMIN']}>'ADMIN ONLY'</ProtectedRoute>
						),
					},
				],
			},

			{ path: '*', element: <NotFound /> },
		],
	},
]);
