import { useMemo } from 'react';
import { Button } from '../Button';
import { Card } from '../Card';
import { Title } from '../Title';
import { TitleYellowtail } from '../TitleYellowtail';

export function Offer() {
	const products = useMemo(
		() => [
			{
				category: 'Vegetable',
				img: 'https://alvikslantbruksab.com/wp-content/uploads/2021/05/PL6.png',
				title: 'Calabrese Broccoli',
				oldPrice: 19,
				currentPrince: 12.99,
				rating: 5,
			},
			{
				category: 'Vegetable',
				img: 'https://media.cotabest.com.br/media/sku/pepino-japones-por-kg-dois-cunhados-kg.png',
				title: 'Cucumber',
				oldPrice: 5,
				currentPrince: 1.9,
				rating: 5,
			},
			{
				category: 'Vegetables',
				img: 'https://binksberryhollow.com/wp-content/uploads/2022/01/vadalia-onion.png',
				title: 'Onion',
				oldPrice: 4,
				currentPrince: 2.3,
				rating: 5,
			},
			{
				category: 'Vegetable',
				img: 'https://i.pinimg.com/originals/d3/bf/01/d3bf016508589d1eacd841e3cadb8a19.png',
				title: 'Cabbage',
				oldPrice: 9,
				currentPrince: 3,
				rating: 5,
			},
		],
		[]
	);

	return (
		<div className="flex flex-col bg-dark-500 gap-4 p-28">
			<div className="flex justify-between items-end flex-wrap gap-4">
				<div className="flex flex-col gap-4">
					<TitleYellowtail>Offer</TitleYellowtail>
					<Title className=" text-white ">We Offer Organic For You</Title>
				</div>
				<Button variant="secondary">View All Product</Button>
			</div>

			<div className="justify-center lg:justify-between flex items-center  flex-wrap gap-4">
				{products.map(product => (
					<Card key={product.title} {...product} />
				))}
			</div>
		</div>
	);
}
