import {Features} from '../Features/Features';
import { Hero } from "../Hero/Hero"
import {Pricing} from '../Pricing/Pricing';

export function Homepage({handleLogin}) {
    return (
        <>
          <Hero handleLogin={handleLogin} />
          <Features />
          <Pricing handleLogin={handleLogin} />
        </>     
    )
}