import './dashboard.css';
import { useState } from 'react';
import { useUserContext } from '../../services/Authentication';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import json from '../../locales/dashboard.json';
import 'font-awesome/css/font-awesome.min.css';
import Accordion from './Accordion';

export function Dashboard() {
	const { user } = useUserContext();
	const name = user;

	const [toggle, setToggle] = useState(true);

	return (
		<main className='dashboard-main'>
			<h1 className='dashboard-welcome-message'>
				Welcome back, <span className='user-name'>{name}</span> 👋🏻
			</h1>
			<Accordion/>

			{json.map((item) => {
				return (
					<div className='accordions' key={item.id} >
						<input
							type='checkbox'
							id={item.id}
							className='accordion-input'
							onClick={() => setToggle(!toggle)}
						/>
						{/* <div className='accordion-header'>
							<div className='accordion-header-items'>
								<label for={item.id}>
									<h2 className='accordion-button'>
										{toggle ? (
											<i className='fa fa-plus'></i>
										) : (
											<i class='fa fa-minus'></i>
										)}
									</h2>
								</label>
								<h6 className='accordion-header-text'>{item.symbol}</h6>
							</div>
						</div>
					 */}
					</div>
				);
			})}
		</main>
	);
}
