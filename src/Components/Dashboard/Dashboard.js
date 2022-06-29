import './dashboard.css'
import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../../services/Authentication';

export function Dashboard() {
   const {user} = useUserContext()
   const name = user.toUpperCase() 
    const navigate = useNavigate();

    function handleNavigate() {
        navigate('/')
    }

    return (
    <main className="dashboard-main">
        <h1 className="dashboard-welcome-message">WELCOME, <span className="user-name">{name}</span></h1>
        <button className="button-style" onClick={handleNavigate}>Back to Homepage</button>
    </main>
    )
}