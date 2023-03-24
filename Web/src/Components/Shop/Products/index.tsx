import { useMemo } from 'react';
import { ProductCard } from '~/Components/ProductCard';

export function Products() {
	const products = useMemo(
		() => [
			{
				category: 'Vegetable',
				img: 'https://www.thegoodmoodfood.com.au/siteassets/foods/green/broccoli-lg.png',
				title: 'Calabrese Broccoli',
				oldPrice: 20,
				currentPrince: 13,
				rating: 5,
			},
			{
				category: 'Fresh',
				img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Banana.png/800px-Banana.png',
				title: 'Fresh Banana Fruites',
				oldPrice: 20,
				currentPrince: 14,
				rating: 5,
			},
			{
				category: 'Millets',
				img: 'https://static.vecteezy.com/system/resources/thumbnails/010/833/991/small_2x/cashew-nuts-isolated-on-white-background-with-clipping-path-png.png',
				title: 'White Nuts',
				oldPrice: 20,
				currentPrince: 15,
				rating: 5,
			},
			{
				category: 'Vegetable',
				img: 'https://www.vrg.org/blog/wp-content/uploads/2019/08/tomato-clipart-tomato-png-image-picture-1024x641.png',
				title: 'Vegan Red Tomato',
				oldPrice: 20,
				currentPrince: 17,
				rating: 5,
			},
			{
				category: 'Health',
				img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Mung_beans.png/2158px-Mung_beans.png',
				title: 'Mung Bean',
				oldPrice: 12,
				currentPrince: 11,
				rating: 5,
			},
			{
				category: 'Nuts',
				img: 'http://www.hasel.hr/134-home_default/hazelnut-kernels.jpg',
				title: 'Brown Hazelnut',
				oldPrice: 99,
				currentPrince: 65,
				rating: 5,
			},
			{
				category: 'Fresh',
				img: 'https://igav3-metcdn-com.global.ssl.fastly.net/content/uploads/sites/2/2016/10/25042334/eggs.png',
				title: 'Eggs',
				oldPrice: 17,
				currentPrince: 9.99,
				rating: 5,
			},
			{
				category: 'Fresh',
				img: 'https://yumyum.co.mz/wp-content/uploads/2021/09/WHITE-BREAD-LOAF-2.png',
				title: 'Bread',
				oldPrice: 3,
				currentPrince: 0.99,
				rating: 5,
			},
			{
				category: 'Vegetable',
				img: 'https://i.pinimg.com/originals/73/a9/b9/73a9b916a6a8d75b71e91a7287c07d75.png',
				title: 'Lettuce',
				oldPrice: 1,
				currentPrince: 0.59,
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
		<div className="my-10 flex gap-5 flex-wrap items-center justify-center">
			{products.map(product => (
				<ProductCard key={product.title} {...product} />
			))}
		</div>
	);
}
