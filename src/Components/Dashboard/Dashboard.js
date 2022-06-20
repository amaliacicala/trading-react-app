import './dashboard.css'

export function Dashboard({user}) {
    const name = user.toUpperCase()
    return (
    <main className="dashboard-main">
        <h1 style={{fontSize: '50px', textAlign:'center'}}>WELCOME {name}</h1>
    </main>
    )
}