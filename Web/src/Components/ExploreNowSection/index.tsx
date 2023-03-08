import background from '~/Assets/background-food-home.png';
import { Button } from '../Button';
import { TitleYellowtail } from '../TitleYellowtail';
import styles from './index.module.css';

export function ExploreNowSection() {
	return (
		<div className={styles.subContainer}>
			<div className="flex flex-col w-[530px] gap-5">
				<TitleYellowtail>100% Natural Food</TitleYellowtail>
				<span className="font-extrabold text-7xl">
					Choose the best healthier way of life
				</span>

				<Button variant="secondary">Explore Now</Button>
			</div>
			<div>
				<img src={background} alt="Background Home" />
			</div>
		</div>
	);
}
