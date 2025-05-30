import { Outlet } from 'react-router-dom';

const ClientLayout = () => {
	/*const role = useSelector((state: RootState) => state.auth.user?.role);

	// Если пользователь — админ, отправим его в админку
	if (role === 'admin') {
		return <Navigate to="/admin" replace />;
	}*/

	return (
		<div>
			HEADER
			<main className="container">
				<Outlet />
			</main>
		</div>
	);
};

export default ClientLayout;
