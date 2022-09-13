import { useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useUserContext } from './Authentication';
import { useNavigate } from 'react-router-dom';

const Protected = ({ children }) => {
	const { log, setLog } = useUserContext();
	const { setUser } = useUserContext();

	const navigate = useNavigate();

	const location = useLocation();

	useEffect(() => {
		const accessToken = localStorage.getItem('accessToken');
		const userName = localStorage.getItem('name');

		if (accessToken) {
			setLog(true);
			setUser(userName);
			navigate(location.pathname);
		}
	});

	if (!log) {
		return <Navigate to='/' replace />;
	}
	return children ? children : <Outlet />;
};

export default Protected;
