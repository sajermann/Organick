import { CartButton } from '../CartButton';
import { Logo } from '../Logo';
import { Menu } from '../Menu';
import { Search } from '../Search';

export function Header() {
	return (
		<header className="p-16">
			<div className="flex items-center justify-between gap-4 flex-wrap">
				<div className="justify-center flex items-center md:justify-between gap-4 flex-wrap">
					<Logo />
					<Menu />
				</div>

				<div className="justify-center flex items-center md:justify-between gap-4 flex-wrap">
					<Search />
					<CartButton />
				</div>
			</div>
		</header>
	);
}
