import bannerBanana from '~/Assets/food-banana.png';
import { Button } from '~/Components/Button';
import { ExploreNowSection } from '~/Components/ExploreNowSection';
import { Icons } from '~/Components/Icons';

export function Home() {
	return (
		<div>
			<ExploreNowSection />
			<div className="max-w-lg rounded-2xl overflow-hidden relative">
				<img src={bannerBanana} alt="Get Garden Fresh Fruits" />
				<div className="absolute top-1/2 flex-flex-col w-52 ml-5">
					<span className="font-Yellowtail text-white text-4xl">Natural!!</span>
					<span className="font-extrabold text-4xl text-white">
						Get Garden Fresh Fruits
					</span>
				</div>
			</div>
		</div>
	);
}
