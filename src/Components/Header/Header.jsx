import React from 'react';
import { ModaleLogin} from '../Modal/Modal';
import { ModaleSignUp } from '../Modal/Modal';
import { Logout } from './Logout';
import './header.css'

export function Header({handleLogin, handleLogout}) {
    const pathname = window.location.pathname

    return (
        <header className='header-header'>
            <h2 className='header-logo'>Logo</h2>
            <div>
                {pathname === '/' ?
                    <>
                        <a className="header-anchor" href="#features">Features</a>
                        <a className="header-anchor" href="#pricing">Pricing</a>
                        <ModaleLogin handleLogin={handleLogin}/>
                        <ModaleSignUp handleLogin={handleLogin}/>
                    </> 
                : 
                    <>
                        <a className="header-anchor" href="#">Profile</a>
                        <a className="header-anchor" href="#">Account Settings</a>
                        <Logout handleLogout={handleLogout}/>
                    </>
                }
            </div>
        </header>
    )         
};