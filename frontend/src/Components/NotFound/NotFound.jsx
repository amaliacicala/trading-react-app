import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './notfound.css';
import { useUserContext } from '../../services/Authentication';
import img from '../../assets/not-found.svg';

export default function NotFound() {
	const { setLog } = useUserContext();

	useEffect(() => {
		const accessToken = localStorage.getItem('accessToken');

		if (accessToken) {
			setLog(true);
		}
	}, [setLog]);

	const navigate = useNavigate();

	function handleNavigate() {
		navigate('/');
	}

	return (
		<div className='not-found'>
			<section className='not-found-text'>
				<h3>Error</h3>
				<h1>404</h1>
				<h2>Sorry, we were unable to find that page.</h2>
				<button className='button-style' onClick={handleNavigate}>
					Back to Homepage
				</button>
			</section>
			<img className='not-found-img' alt='404 Not Found' src={img} />
		</div>
	);
}
