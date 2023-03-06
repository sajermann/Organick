import logo from '~/Assets/logo.svg';
import { CartButton } from '../CartButton';
import { Menu } from '../Menu';
import { Search } from '../Search';

export function Header() {
	return (
		<header className="p-16 flex items-center justify-center">
			<div className="flex items-center justify-center gap-36">
				<img src={logo} alt="Organick Logo" />
				<Menu />
				<div className="flex items-center justify-center gap-4">
					<Search />
					<CartButton />
				</div>
			</div>
		</header>
	);
}
