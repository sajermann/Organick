import { useMemo } from 'react';
import { Icons } from '~/Components/Icons';
import { Title } from '~/Components/Title';
import { TitleYellowtail } from '~/Components/TitleYellowtail';
import imageSpice from '~/Assets/about-offer-product-spicy.jpg';
import imageNuts from '~/Assets/about-offer-product-nuts.jpg';
import imageFruits from '~/Assets/about-offer-product-fruits.jpg';
import imageVegetable from '~/Assets/about-offer-product-vegetable.jpg';

import classNames from 'classnames';

type TInfo = {
	image: string;
	name: string;
};

function Card({ image, name }: TInfo) {
	return (
		<div className="col-span-12 md:col-span-6 xl:col-span-3 flex flex-col items-center justify-center rounded-3xl w-ful gap-5">
			<div className="w-full">
				<img src={image} alt={name} className="rounded-3xl w-full h-80" />
			</div>
			<span className="text-white text-2xl">{name}</span>
		</div>
	);
}

export function OfferProduct() {
	const products = useMemo(
		() => [
			{
				image: imageSpice,
				name: 'Spicy',
			},
			{
				image: imageNuts,
				name: 'Nuts & Feesd',
			},
			{
				image: imageFruits,
				name: 'Fruits',
			},
			{
				image: imageVegetable,
				name: 'Vegetable',
			},
		],
		[]
	);

	return (
		<div className="p-2 lg:p-28 flex flex-col gap-10 bg-dark-500 ">
			<div className="flex gap-10">
				<div className="flex flex-col gap-4 w-full items-center justify-center">
					<TitleYellowtail>About Us</TitleYellowtail>
					<Title className="text-center text-white">
						What We Offer for You
					</Title>
				</div>
			</div>

			<div className="p-2 grid grid-cols-12 gap-5">
				{products.map(product => (
					<Card key={product.name} {...product} />
				))}
			</div>
		</div>
	);
}
