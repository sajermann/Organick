import bannerAbout from '~/Assets/background-about-home.png';
import leaftCup from '~/Assets/leaft-cup.png';
import mail from '~/Assets/mail.png';
import { Button } from '~/Components/Button';
import { Title } from '~/Components/Title';
import { TitleYellowtail } from '~/Components/TitleYellowtail';

export function About() {
	return (
		<div className="bg-light-100 flex px-10">
			<div className="hidden lg:flex items-center justify-center max-w-4xl">
				<img src={bannerAbout} alt="About Us" />
			</div>

			<div className="max-w-2xl flex flex-col justify-center gap-6 py-4">
				<div className="flex flex-col gap-4">
					<TitleYellowtail>About Us</TitleYellowtail>
					<Title className="font-extrabold text-5xl">
						We Believe in Working Accredited Farmers
					</Title>
					<p>
						Simply dummy text of the printing and typesetting industry. Lorem
						had ceased to been the industry&apos;s standard dummy text ever
						since the 1500s, when an unknown printer took a galley.
					</p>
				</div>

				<div className="flex gap-4">
					<div>
						<img src={leaftCup} alt="" />
					</div>
					<div className="flex gap-3 max-w-xs flex-col">
						<p className="font-extrabold text-2xl">Organic Foods Only</p>
						<p>
							Simply dummy text of the printing and typesetting industry. Lorem
							Ipsum
						</p>
					</div>
				</div>

				<div className="flex gap-4">
					<div>
						<img src={mail} alt="" />
					</div>
					<div className="flex gap-3 max-w-xs flex-col">
						<p className="font-extrabold text-2xl">Quality Standards</p>
						<p>
							Simply dummy text of the printing and typesetting industry. Lorem
							Ipsum
						</p>
					</div>
				</div>

				<Button>Show Now</Button>
			</div>
		</div>
	);
}
