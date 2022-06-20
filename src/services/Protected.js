import {Navigate, Outlet} from 'react-router-dom';

const Protected = ({log, children}) => {
    if (!log) {
        return <Navigate to='/' replace />;
    }
    return children ? children : <Outlet/>;
};

export default Protected