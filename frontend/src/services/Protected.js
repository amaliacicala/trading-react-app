import {useEffect} from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import { useUserContext } from './Authentication';
import { useNavigate } from "react-router-dom";

const Protected = ({children}) => {
    const {log, setLog} = useUserContext()
    const { setUser } = useUserContext();

     const navigate = useNavigate();

    useEffect(() => {
      const accessToken = localStorage.getItem("accessToken");
      const userName = localStorage.getItem("name");
      const userId = localStorage.getItem("id");

      if (accessToken) {
        setLog(true);
        setUser(userName)
        navigate(`dashboard/${userId}`);
      }
    }, []);
    
    if (!log) {
        return <Navigate to='/' replace />;
    }
    return children ? children : <Outlet/>;
};

export default Protected