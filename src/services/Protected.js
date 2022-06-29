import {Navigate, Outlet} from 'react-router-dom';
import { useUserContext } from './Authentication';

const Protected = ({children}) => {
    const {log} = useUserContext()
    if (!log) {
        return <Navigate to='/' replace />;
    }
    return children ? children : <Outlet/>;
};

export default Protected