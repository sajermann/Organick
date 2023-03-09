import { Title } from '~/Components/Title';

export function Header() {
	return (
		<header className="bg-[url('~/Assets/headerAbout.png')] bg-cover bg-pink-100 flex items-center justify-center h-[30vh]">
			<Title className="text-7xl">About Us</Title>
		</header>
	);
}
