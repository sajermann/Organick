import { Icons } from '../Icons';

export function CartButton() {
	return (
		<button
			type="button"
			className="border border-light-200 w-40 h-16 rounded-[36px] p-1 flex items-center justify-between"
		>
			<div className="w-14 h-14 rounded-full flex items-center justify-center bg-dark-500">
				<Icons.Cart width="21px" height="21px" color="#FFF" />
			</div>
			<span className="font-semibold text-lg flex-1"> Cart (0)</span>
		</button>
	);
}
