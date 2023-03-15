import { AboutUs } from '~/Components/About/AboutUs';
import { Header } from '~/Components/About/Header';
import { OfferProduct } from '~/Components/About/OfferProduct';
import { Team } from '~/Components/About/Team';
import { WhyChooseUs } from '~/Components/About/WhyChooseUs';
import { Footer } from '~/Components/Footer';

export function About() {
	return (
		<>
			<Header />
			<AboutUs />
			<WhyChooseUs />
			<Team />
			<OfferProduct />
			<Footer />
		</>
	);
}
