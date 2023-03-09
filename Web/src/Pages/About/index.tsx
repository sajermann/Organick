import { AboutUs } from '~/Components/About/AboutUs';
import { Header } from '~/Components/About/Header';
import { WhyChooseUs } from '~/Components/About/WhyChooseUs';

export function About() {
	return (
		<>
			<Header />
			<AboutUs />
			<WhyChooseUs />
		</>
	);
}
