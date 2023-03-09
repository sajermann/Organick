import { About } from '~/Components/Home/About';
import { Blog } from '~/Components/Blog';
import { ExploreNowSection } from '~/Components/ExploreNowSection';
import { Footer } from '~/Components/Footer';
import { Gallery } from '~/Components/Gallery';
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
			<Gallery />
			<Blog />
			<Footer />
		</div>
	);
}
