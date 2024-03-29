import { useMemo } from 'react';
import imageWhoWeAre from '~/Assets/whoWeAre.jpg';
import { Title } from '~/Components/Title';
import { TitleYellowtail } from '~/Components/TitleYellowtail';

export function WhoWeAre() {
	const messages = useMemo(
		() => [
			{
				title: 'Start with Our Company First',
				description:
					'Sed ut perspiciatis unde omnis iste natus error sit  accusantium doloremque laudantium. Sed ut perspiciatis.',
			},
			{
				title: 'Learn How to Grow Yourself',
				description:
					'Lorem ipsum dolor sit amet consectetur, adipisicing elit. A atque ducimus et dolor asperiores, perspiciatis culpa, cupiditate illum, tempora nisi deserunt? Dignissimos laborum officia illo ducimus obcaecati quos beatae architecto.',
			},
			{
				title: 'Farming Strategies of Today',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil id officiis quos velit magnam, iure dolore laborum atque amet cumque, harum incidunt quis est voluptatum alias, libero cupiditate quae perspiciatis.',
			},
		],
		[]
	);

	return (
		<div className="overflow-hidden">
			<div className="w-full md:relative">
				<img
					src={imageWhoWeAre}
					alt="Who We Are"
					className="w-full hidden md:block 2xl:w-1/2"
				/>
				<div className="w-full lg:max-w-xl flex flex-col gap-8 rounded-3xl bg-white p-4 md:p-7 md:absolute md:top-1/2 md:-translate-y-1/2 md:left-1/2 md:-translate-x-1/2">
					<TitleYellowtail>Eco Friendly</TitleYellowtail>
					<Title>Econis is a Friendly Organic Store</Title>
					{messages.map(msg => (
						<div key={msg.title}>
							<p className="font-medium text-2xl">{msg.title}</p>
							<p>{msg.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
