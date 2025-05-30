import { Outlet } from 'react-router-dom';

const CrmLayout = () => {
	/*const role = useSelector((state: RootState) => state.auth.user?.role);

	if (role !== 'admin') {
		return <Navigate to="/" replace />;
	}*/

	return (
		<div>
			<header>Admin Navigation</header>
			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default CrmLayout;
