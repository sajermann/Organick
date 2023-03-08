import { Icons } from '../Icons';

const range = (len: number) => {
	const arr = [];
	for (let i = 0; i < len; i += 1) {
		arr.push(i);
	}
	return arr;
};

export function Stars({ quantity }: { quantity: number }) {
	return (
		<div className="flex gap-1">
			{range(quantity).map(star => (
				<Icons.Star key={star} width="19px" height="19px" />
			))}
		</div>
	);
}
