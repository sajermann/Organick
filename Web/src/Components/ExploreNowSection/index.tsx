import background from '~/Assets/background-food-home.png';
import { Button } from '../Button';
import { TitleYellowtail } from '../TitleYellowtail';

export function ExploreNowSection() {
	return (
		<div className="bg-[url('~/Assets/background-home.png')] bg-cover bg-pink-100 flex items-center justify-between px-2 lg:px-40">
			<div className="flex flex-col w-[530px] gap-5 py-4">
				<TitleYellowtail>100% Natural Food</TitleYellowtail>
				<span className="font-extrabold text-7xl">
					Choose the best healthier way of life
				</span>

				<Button variant="secondary">Explore Now</Button>
			</div>
			<div className="hidden lg:flex items-center justify-center">
				<img src={background} alt="Background Home" />
			</div>
		</div>
	);
}
