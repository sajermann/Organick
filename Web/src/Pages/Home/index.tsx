import background from '~/Assets/background-food-home.png';
import styles from './index.module.css';

export function Home() {
	return (
		<div className={styles.subContainer}>
			<div className="flex flex-col w-[530px] border border-black">
				<span className="font-Yellowtail text-green-500 text-4xl">
					100% Natural Food
				</span>
				<span className="font-extrabold text-7xl">
					Choose the best healthier way of life
				</span>
			</div>
			<div>
				<img src={background} alt="Background Home" />
			</div>
		</div>
	);
}
