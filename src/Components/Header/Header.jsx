import React from 'react';
import { ModaleLogin} from '../Modal/Modal';
import { ModaleSignUp } from '../Modal/Modal';
import { Logout } from './Logout';
import { Link } from 'react-router-dom';
import './header.css'

export function Header({handleLogin, handleLogout,log}) {
    const pathname = window.location.pathname

    return (
        <header className='header-header'>
            <Link to="/" className='header-logo'>Logo</Link>
            <div>
                {log === true ?
                    <div className='header-login-nav'>
                        <Link to="/dashboard" className="header-anchor">Dashboard</Link>
                        <a className="header-anchor" href="#">Profile</a>
                        <a className="header-anchor" href="#">Account Settings</a>
                        <Logout handleLogout={handleLogout}/>
                    </div>
                :
                    <>
                        <a className="header-anchor" href="#features">Features</a>
                        <a className="header-anchor" href="#pricing">Pricing</a>
                        <ModaleLogin handleLogin={handleLogin}/>
                        <ModaleSignUp handleLogin={handleLogin}/>
                    </> 
                }
            </div>
        </header>
    )         
};