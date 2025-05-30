import { createBrowserRouter } from 'react-router-dom';

import NotFound from '../../components/commons/not-found/not-found.tsx';
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
				children: [{ index: true, element: 'HOME CLIENT' }],
			},
			{ path: ROUTES.LOGIN, element: 'LOGIN' },
			{ path: ROUTES.REGISTER, element: 'REGISTER' },

			// Admin route
			{
				path: 'crm',
				element: (
					<ProtectedRoute roles={['admin', 'master']}>
						<CrmLayout />
					</ProtectedRoute>
				),
				children: [
					{ index: true, element: 'ADMIN DASHBOARD' },
					{
						path: '/crm/reports',
						element: (
							<ProtectedRoute roles={['admin']}>'ADMIN ONLY'</ProtectedRoute>
						),
					},
				],
			},

			{ path: '*', element: <NotFound /> },
		],
	},
]);
