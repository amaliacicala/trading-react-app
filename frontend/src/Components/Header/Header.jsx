import React from 'react';
import { ModaleLogin} from '../Modal/Modal';
import { ModaleSignUp } from '../Modal/Modal';
import { Logout } from './Logout';
import { Link } from 'react-router-dom';
import './header.css'
import { useUserContext } from '../../services/Authentication';

export function Header() {
    const {log} = useUserContext()

    return (
        <header className='header-header'>
            <Link to="/" className='header-logo'>Logo</Link>
            <div>
                {log === true ?
                    <div className='header-login-nav'>
                        <Link to="/dashboard/:id" className="header-anchor">Dashboard</Link>
                        <a className="header-anchor" href="#">Your recommendations</a>
                        <a className="header-anchor" href="#">Account Settings</a>
                        <Logout />
                    </div>
                :
                    <>
                        <a className="header-anchor" href="#features">Features</a>
                        <a className="header-anchor" href="#pricing">Pricing</a>
                        <ModaleLogin/>
                        <ModaleSignUp/>
                    </> 
                }
            </div>
        </header>
    )         
};