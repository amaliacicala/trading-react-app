import './dashboard.css';
import { useState } from 'react';
import { useUserContext } from '../../services/Authentication';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import json from '../../locales/dashboard.json';
import 'font-awesome/css/font-awesome.min.css';

export function Dashboard() {
	const { user } = useUserContext();
	const name = user;

	const [toggle, setToggle] = useState(true);

	return (
		<main className='dashboard-main'>
			<h1 className='dashboard-welcome-message'>
				Welcome back, <span className='user-name'>{name}</span>
			</h1>
			{/* <section className='dashboard-legend'>
				<div className='dashboard-legend-items'>
					<h6 className='dashboard-legend-text'>Ticker</h6>
				</div>
				<div className='dashboard-legend-items'>
					<h6 className='dashboard-legend-text'>Market Sentiment</h6>
				</div>
				<div className='dashboard-legend-items'>
					<h6 className='dashboard-legend-text'>Grade</h6>
				</div>
				<div className='dashboard-legend-items'>
					<h6 className='dashboard-legend-text'>Analyst EPS</h6>
				</div>
				<div className='dashboard-legend-items'>
					<h6 className='dashboard-legend-text'>Chance Earning Beat</h6>
				</div>
				<div className='dashboard-legend-items'>
					<h6 className='dashboard-legend-text'>Momentum Score</h6>
				</div>
				<div className='dashboard-legend-items'>
					<h6 className='dashboard-legend-text'>Financial Increase</h6>
				</div>
				<div className='dashboard-legend-items'>
					<h6 className='dashboard-legend-text'>Suggestion</h6>
				</div>
			</section> */}

			{json.map((item) => {
				return (
					<div class='accordions'>
						<input
							type='checkbox'
							id={item.id}
							className='accordion-input'
							onClick={() => setToggle(!toggle)}
						/>
						<div className='accordion-header'>
							<div className='accordion-header-items'>
								<label for={item.id}>
									<h2 className='accordion-button'>
										{toggle ? (
											<i className='fa fa-minus'></i>
										) : (
											<i class='fa fa-plus'></i>
										)}
									</h2>
								</label>
								<h6 className='accordion-header-text'>{item.symbol}</h6>
							</div>
							<div className='accordion-header-items hide'>
								<h6 className='accordion-header-text'>Market Sentiment</h6>
							</div>
							<div className='accordion-header-items hide'>
								<h6 className='accordion-header-text'>Grade</h6>
							</div>
							<div className='accordion-header-items hide'>
								<h6 className='accordion-header-text'>Analyst EPS</h6>
							</div>
							<div className='accordion-header-items hide'>
								<h6 className='accordion-header-text'>Chance Earning Beat</h6>
							</div>
							<div className='accordion-header-items hide'>
								<h6 className='accordion-header-text'>Momentum Score</h6>
							</div>
							<div className='accordion-header-items hide'>
								<h6 className='accordion-header-text'>Financial Increase</h6>
							</div>
							<div className='accordion-header-items hide'>
								<h6 className='accordion-header-text'>Suggestion</h6>
							</div>
						</div>
						<div class='accordion-content'>
							<TradingViewWidget
								symbol={item.symbol}
								theme={Themes.LIGHT}
								locale='uk'
								// autosize
								width='autosize'
								height='400'
							/>
						</div>
					</div>
				);
			})}
		</main>
	);
}
