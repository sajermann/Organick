import { Link } from 'react-router-dom';
import { Icons } from '../Icons';

export function Menu() {
	return (
		<ul className="font-bold text-xl text-dark-500 justify-center items-center flex gap-10 flex-wrap">
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>

			<div className="group relative inline-block">
				<div className="flex items-center gap-2">
					Pages <Icons.ArrowDown width="8px" height="6px" />
				</div>
				<div className="group-hover:flex flex-col gap-2 absolute hidden border py-5 bg-white left-1/2 -translate-x-1/2 rounded">
					<Link to="/about" className="hover:bg-light-100 px-2">
						About
					</Link>
					<Link to="/shop" className="hover:bg-light-100 px-2">
						Shop
					</Link>
					<Link to="/portfolio" className="hover:bg-light-100 px-2">
						Portfolio
					</Link>
					<Link to="/team" className="hover:bg-light-100 px-2">
						Team
					</Link>
					<Link to="/blog" className="hover:bg-light-100 px-2">
						Blog
					</Link>
					<Link to="/contact" className="hover:bg-light-100 px-2">
						Contact
					</Link>
				</div>
			</div>

			<Link to="/shop">Shop</Link>
			<Link to="/projects">Projects</Link>
			<Link to="/new">New</Link>
		</ul>
	);
}
