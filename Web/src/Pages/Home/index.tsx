import { About } from '~/Components/Home/About';
import { Banner } from '~/Components/Home/Banner';
import { Footer } from '~/Components/Footer';
import { OfferBanner } from '~/Components/Home/OfferBanner';
import { Shop } from '~/Components/Home/Shop';
import { Testimonial } from '~/Components/Home/Testimonial';
import { Offer } from '~/Components/Home/Offer';
import { Gallery } from '~/Components/Home/Gallery';
import { Blog } from '~/Components/Home/Blog';
import { WhoWeAre } from '~/Components/Home/WhoWeAre';

export function Home() {
	return (
		<>
			<Banner />
			<OfferBanner />
			<About />
			<Shop />
			<Testimonial />
			<Offer />
			<WhoWeAre />
			<Gallery />
			<Blog />
			<Footer />
		</>
	);
}
