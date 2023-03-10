import { useMemo } from 'react';
import imageOrganicJuice from '~/Assets/organicJuice.jpg';
import imageOrganicFood from '~/Assets/organicFood.jpg';
import imagenutsCookis from '~/Assets/nutsCookis.jpg';

export function Gallery() {
	const options = useMemo(
		() => [
			{
				title: 'Organic Juice',
				image: imageOrganicJuice,
			},
			{
				title: 'Organic Food',
				image: imageOrganicFood,
			},
			{
				title: 'Nuts Cookis',
				image: imagenutsCookis,
			},
		],
		[]
	);

	return (
		<div className="w-full flex py-4 md:py-60 bg-light-260 gap-10 flex-wrap items-center justify-center">
			{options.map(opt => (
				<div
					key={opt.title}
					className="relative border max-w-[calc(100%_*_(1/3)_-_27px)] min-w-[260px]"
				>
					<img src={opt.image} alt={opt.title} />
					<div className="border rounded-2xl text-2xl w-60 text-center p-4 absolute bg-white top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
						{opt.title}
					</div>
				</div>
			))}
		</div>
	);
}
