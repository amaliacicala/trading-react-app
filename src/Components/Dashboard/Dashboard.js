import './dashboard.css'

export function Dashboard({user}) {
    const name = user.toUpperCase() 
    return (
    <main className="dashboard-main">
        <h1 className="dashboard-welcome-message">WELCOME {name}</h1>
    </main>
    )
}