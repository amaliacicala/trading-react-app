import { Features } from '../Features/Features';
import { Hero } from '../Hero/Hero';
import { Pricing } from '../Pricing/Pricing';

export function Homepage() {
	return (
		<>
			<Hero />
			<Features />
			<Pricing />
		</>
	);
}
