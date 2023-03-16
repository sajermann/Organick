import { AboutUs } from '~/Components/About/AboutUs';
import { OfferProduct } from '~/Components/About/OfferProduct';
import { Team } from '~/Components/About/Team';
import { WhyChooseUs } from '~/Components/About/WhyChooseUs';
import { Footer } from '~/Components/Footer';
import { HeaderPage } from '~/Components/HeaderPage';

export function About() {
	return (
		<>
			<HeaderPage
				heading="About"
				className="bg-[url('~/Assets/headerAbout.png')]"
			/>
			<AboutUs />
			<WhyChooseUs />
			<Team />
			<OfferProduct />
			<Footer />
		</>
	);
}
