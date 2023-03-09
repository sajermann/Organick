import { Title } from '~/Components/Title';
import { TitleYellowtail } from '~/Components/TitleYellowtail';
import imageAboutUs from '~/Assets/aboutUs.png';
import { Icons } from '~/Components/Icons';
import { Button } from '~/Components/Button';

export function AboutUs() {
	return (
		<div className="flex p-20">
			<div className="w-1/2">
				<img src={imageAboutUs} alt="About Us" />
			</div>
			<div className="flex flex-col justify-center gap-10 w-1/2">
				<TitleYellowtail>About Us</TitleYellowtail>
				<Title>We do Creative Things for Success</Title>
				<p>
					Simply dummy text of the printing and typesetting industry. Lorem had
					ceased to been the s standard dummy text ever since the 1500s, when an
					unknown printer took a galley. Simply dummy text of the printing and
					typesetting industry. Lorem had ceased to been the s standard dummy
					text ever since the 1500s, when an unknown printer took a galley.
				</p>
				<div className="flex flex-wrap">
					<div className="flex items-center justify-center gap-2">
						<Icons.Tractor width="50px" height="50px" color="#7EB693" />
						<p className="text-2xl max-w-[80%]">Modern Agriculture Equipment</p>
					</div>
					<div className="flex items-center justify-center gap-2">
						<Icons.Factory width="50px" height="50px" color="#7EB693" />
						<p className="text-2xl max-w-[80%]">No growth hormones are used</p>
					</div>
				</div>

				<Button>Explore More</Button>
			</div>
		</div>
	);
}
