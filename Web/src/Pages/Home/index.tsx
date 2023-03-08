import { About } from '~/Components/About';
import { ExploreNowSection } from '~/Components/ExploreNowSection';
import { Offer } from '~/Components/Offer';
import { OfferBanner } from '~/Components/OfferBanner';
import { Shop } from '~/Components/Shop';
import { Testimonial } from '~/Components/Testimonial';
import { WhoWeAre } from '~/Components/WhoWeAre';

export function Home() {
	return (
		<div>
			<ExploreNowSection />
			<OfferBanner />
			<About />
			<Shop />
			<Testimonial />
			<Offer />
			<WhoWeAre />
		</div>
	);
}
