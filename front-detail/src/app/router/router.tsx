import { createBrowserRouter } from 'react-router-dom';

import NotFound from '../../components/ui/not-found/not-found.tsx';
import { Login } from '../../pages/auth/login/login.tsx';
import { NewVerificationPage } from '../../pages/auth/new-verification/new-verification.tsx';
import { Register } from '../../pages/auth/register/register.tsx';
import { About } from '../../pages/client/about/about.tsx';
import { Contacts } from '../../pages/client/contacts/contacts.tsx';
import { Home } from '../../pages/client/home/home.tsx';
import { OrderProfile } from '../../pages/client/profile/order/order-profile.tsx';
import { Profile } from '../../pages/client/profile/profile.tsx';
import { Services } from '../../pages/client/services/services.tsx';
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
					{ index: true, element: <Home /> },
					{ path: ROUTES.ABOUT, element: <About /> },
					{ path: ROUTES.SERVICES_CLIENT, element: <Services /> },
					{ path: ROUTES.CONTACTS, element: <Contacts /> },
					{ path: ROUTES.LOGIN, element: <Login /> },
					{ path: ROUTES.REGISTER, element: <Register /> },
					{
						path: ROUTES.PROFILE,
						element: (
							<ProtectedRoute>
								<Profile />
							</ProtectedRoute>
						),
					},
					{
						path: ROUTES.PROFILE_ORDER,
						element: (
							<ProtectedRoute>
								<OrderProfile />
							</ProtectedRoute>
						),
					},
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
