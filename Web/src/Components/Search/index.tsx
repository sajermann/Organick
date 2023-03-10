import { IconButton } from '../IconButton';
import { Icons } from '../Icons';

export function Search() {
	return (
		<div className="bg-light-400 min-w-[120px] h-16 rounded-[36px] p-1 flex flex-1 items-center justify-center">
			<input
				className="bg-light-400 m-2 min-w-[100px] h-12 rounded-[36px] p-2"
				placeholder="Search..."
			/>
			<IconButton className="bg-green-500">
				<Icons.Search width="21px" height="21px" color="#fff" />
			</IconButton>
		</div>
	);
}
