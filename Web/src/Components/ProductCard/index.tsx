import { Stars } from '../Stars';

type Props = {
	category: string;
	img: string;
	title: string;
	oldPrice: number;
	currentPrince: number;
	rating: number;
};

export function ProductCard({
	category,
	img,
	title,
	oldPrice,
	currentPrince,
	rating,
}: Props) {
	return (
		<div className="h-[480pxp] min-w-[calc(100%_*_(1/4)_-_100px)] rounded-3xl bg-light-100 p-5 flex flex-col gap-4">
			<p className="bg-dark-500 text-white py-1 px-3 rounded-lg w-fit">
				{category}
			</p>
			<img className="w-80 h-80" src={img} alt={title} />
			<footer>
				<p className="font-semibold text-xl">{title}</p>
				<hr className="my-2" />
				<div className="flex justify-between">
					<div className="flex gap-2 items-center">
						<span className="text-light-250 font-semibold text-base flex items-center h-full">
							{new Intl.NumberFormat('en', {
								style: 'currency',
								currency: 'USD',
							}).format(oldPrice)}
						</span>
						<span className="font-bold text-lg flex items-center h-full">
							{new Intl.NumberFormat('en', {
								style: 'currency',
								currency: 'USD',
							}).format(currentPrince)}
						</span>
					</div>
					<div className="flex gap-1">
						<Stars quantity={rating} />
					</div>
				</div>
			</footer>
		</div>
	);
}
