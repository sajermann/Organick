import { AboutUs } from '~/Components/About/AboutUs';
import { Header } from '~/Components/About/Header';
import { Team } from '~/Components/About/Team';
import { WhyChooseUs } from '~/Components/About/WhyChooseUs';

export function About() {
	return (
		<>
			<Header />
			<AboutUs />
			<WhyChooseUs />
			<Team />
		</>
	);
}
