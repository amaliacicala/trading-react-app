import React from 'react';
import { ModaleLogin } from '../Modal/Modal';
import { ModaleSignUp } from '../Modal/Modal';
import { Logout } from './Logout';
import { Link } from 'react-router-dom';
import './header.css';
import { useUserContext } from '../../services/Authentication';

export function Header() {
	const { log } = useUserContext();

	return (
		<header className='header-header'>
			<Link to='/' className='header-logo'>
				Logo
			</Link>
			<div>
				{log === true ? (
					<div className='header-login-nav logged-in'>
						<Link to='/dashboard/:id' className='header-anchor'>
							Dashboard
						</Link>
						<a className='header-anchor hide' href='/'>
							Your recommendations
						</a>
						<a className='header-anchor hide' href='/'>
							Account Settings
						</a>
						<Logout />
					</div>
				) : (
					<div className='header-login-nav logged-out'>
						<a className='header-anchor hide' href='#features'>
							Features
						</a>
						<a className='header-anchor hide' href='#pricing'>
							Pricing
						</a>
						<ModaleLogin />
						<ModaleSignUp />
					</div>
				)}
			</div>
		</header>
	);
}
