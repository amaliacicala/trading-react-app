import { Divider } from "antd";
import { useState } from "react"
function Authentication() {
    const [user, setUser] = useState(null)
    const handleLogin = () => setUser({ id: 0, name: 'Luca' });
    const handleLogout = () => setUser(null);
    return (
        <div>
            

            <Routes>

                <Route index element={<Landing/>} />

                <Route path='landing' element={<Landing/>} />


                <Route element={<Protected user={user} />}>


                    <Route path="home" element={<Home />} />



                </Route>


                <Route path='*' element={<h1>404</h1>} />
            </Routes>
        </div>
    )
}

export default Authentication