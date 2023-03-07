import background from '~/Assets/background-food-home.png';

import { Button } from '../Button';
import { Icons } from '../Icons';
import styles from './index.module.css';

export function ExploreNowSection() {
	return (
		<div className={styles.subContainer}>
			<div className="flex flex-col w-[530px] gap-5">
				<span className="font-Yellowtail text-green-500 text-4xl">
					100% Natural Food
				</span>
				<span className="font-extrabold text-7xl">
					Choose the best healthier way of life
				</span>

				<Button
					variant="secondary"
					className="flex items-center justify-center gap-2"
				>
					Explore Now <Icons.Arrow width="19px" height="19px" />
				</Button>
			</div>
			<div>
				<img src={background} alt="Background Home" />
			</div>
		</div>
	);
}
