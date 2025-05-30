import React from 'react';
import { Navigate } from 'react-router-dom';

import { ROUTES } from '../../shared/constants/constants.ts';

interface ProtectedRouteProps extends React.PropsWithChildren {
	roles?: string[];
}

const mockUser = {
	name: 'Taalibek',
	role: 'master', // может быть 'master', 'user' и т.д.
};

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
	roles = [],
	children,
}) => {
	const user = mockUser;

	if (!user) {
		return <Navigate to={ROUTES.LOGIN} replace />;
	}

	if (roles.length > 0 && !roles.includes(user.role)) {
		return <Navigate to={ROUTES.LOGIN} replace />;
	}

	return <>{children}</>;
};
