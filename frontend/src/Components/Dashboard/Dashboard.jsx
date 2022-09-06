import './dashboard.css';
import { useUserContext } from '../../services/Authentication';
import 'font-awesome/css/font-awesome.min.css';
import Accordion from './Accordion';

export function Dashboard() {
	const { user } = useUserContext();
	const name = user;

	return (
		<main className='dashboard-main'>
			<h1 className='dashboard-welcome-message'>
				Welcome back<span className='user-name'>{`, ${name}`}</span> 👋🏻
			</h1>

			<Accordion />
		</main>
	);
}
