import { useMemo } from 'react';
import { Icons } from '~/Components/Icons';
import { Title } from '~/Components/Title';
import { TitleYellowtail } from '~/Components/TitleYellowtail';

type TInfo = {
	icon: React.ReactNode;
	title: string;
	description: string;
};

function Card({ icon, title, description }: TInfo) {
	return (
		<div className="col-span-12 md:col-span-6 xl:col-span-3 flex flex-col items-center justify-center p-10 bg-white gap-5 rounded-3xl">
			<div className="bg-light-100 p-8 rounded-3xl">{icon}</div>
			<div className="font-extrabold text-2xl text-center">{title}</div>
			<div className="text-center">{description}</div>
		</div>
	);
}

export function WhyChooseUs() {
	const infosCard = useMemo(
		() => [
			{
				icon: <Icons.ShippingCart width="46px" height="46px" />,
				title: 'Return Policy',
				description: 'Simply dummy text of the printintypesetting industry.',
			},
			{
				icon: <Icons.Leaf width="46px" height="46px" />,
				title: '100% Fresh',
				description: 'Simply dummy text of the printintypesetting industry.',
			},
			{
				icon: <Icons.Clock width="46px" height="46px" />,
				title: 'Support 24/7',
				description: 'Simply dummy text of the printintypesetting industry.',
			},
			{
				icon: <Icons.CreditCard width="46px" height="46px" />,
				title: 'Secured Payment',
				description: 'Simply dummy text of the printintypesetting industry.',
			},
		],
		[]
	);

	return (
		<div className="p-2 lg:p-28 flex flex-col  gap-20 bg-light-100">
			<div className="flex gap-10">
				<div className="flex flex-col gap-4 w-full lg:w-1/2">
					<TitleYellowtail>Why Choose us?</TitleYellowtail>
					<Title>We do not buy from the open market & traders.</Title>
					<p>
						Simply dummy text of the printing and typesetting industry. Lorem
						had ceased to been the s standard the 1500s, when an unknown
					</p>

					<div className="rounded-[48px] bg-[#ECECEC] p-6 text-xl flex gap-2 items-center w-1/2">
						<Icons.Eclipse width="20px" height="20px" /> 100% Natural Product
					</div>

					<div className="w-3/4 pl-14 text-lg">
						Simply dummy text of the printing and typesetting industry Lorem
						Ipsum
					</div>

					<div className="rounded-[48px] bg-[#ECECEC] p-6 text-xl flex gap-2 items-center w-1/2">
						<Icons.Eclipse width="20px" height="20px" /> Increases resistance
					</div>

					<div className="w-3/4 pl-14 text-lg">
						Filling, and temptingly healthy, our Biona Organic Granola with Wild
						Berries is just the thing
					</div>
				</div>

				<div className="hidden lg:block w-1/2 bg-[url('~/Assets/about-why-choose-us.jpg')] bg-cover rounded-3xl" />
			</div>

			<div className="p-2 2xl:p-36 grid grid-cols-12 gap-5">
				{infosCard.map(info => (
					<Card key={info.title} {...info} />
				))}
			</div>
		</div>
	);
}
