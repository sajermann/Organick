import { Link } from 'react-router-dom';

export function Menu() {
	return (
		<ul className="font-bold text-xl text-dark-500 flex gap-4">
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/">Pages</Link>
			<Link to="/shop">Shop</Link>
			<Link to="/projects">Projects</Link>
			<Link to="/new">New</Link>
		</ul>
	);
}
