import bannerBanana from '~/Assets/food-banana.png';
import bannerFruits from '~/Assets/food-fruits-offer.png';
import { TitleYellowtail } from '~/Components/TitleYellowtail';

export function OfferBanner() {
	return (
		<div className="flex gap-9 my-11 w-full items-center justify-center flex-wrap">
			<div className="max-w-lg rounded-2xl overflow-hidden relative">
				<img src={bannerBanana} alt="Get Garden Fresh Fruits" />
				<div className="absolute top-1/2 -translate-y-1/2 flex-flex-col w-52 ml-5">
					<TitleYellowtail className="text-white">Natural!!</TitleYellowtail>
					<p className="font-extrabold text-4xl text-white">
						Get Garden Fresh Fruits
					</p>
				</div>
			</div>

			<div className="max-w-lg rounded-2xl overflow-hidden relative">
				<img src={bannerFruits} alt="Get 10% off on Vegeta" />
				<div className="absolute top-1/2 -translate-y-1/2 flex-flex-col w-52 ml-5">
					<TitleYellowtail>Offer!!</TitleYellowtail>
					<p className="font-extrabold text-4xl ">Get Garden Fresh Fruits</p>
				</div>
			</div>
		</div>
	);
}
