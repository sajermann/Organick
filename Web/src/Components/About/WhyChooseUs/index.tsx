import { Title } from '~/Components/Title';
import { TitleYellowtail } from '~/Components/TitleYellowtail';
import imageAboutUs from '~/Assets/aboutUs.png';
import { Icons } from '~/Components/Icons';
import { Button } from '~/Components/Button';

export function WhyChooseUs() {
	return (
		<div className="flex p-20">
			<div className="flex flex-col gap-4">
				<TitleYellowtail>Why Choose us?</TitleYellowtail>
				<Title>We do not buy from the open market & traders.</Title>
				<p>
					Simply dummy text of the printing and typesetting industry. Lorem had
					ceased to been the s standard the 1500s, when an unknown
				</p>
			</div>
		</div>
	);
}
