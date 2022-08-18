import { useUserContext } from "../../services/Authentication"

export function Logout() {
    const {handleLogout} = useUserContext()
    return <>
        <button className='btn-login' onClick={handleLogout}>Logout</button>
    </>
}