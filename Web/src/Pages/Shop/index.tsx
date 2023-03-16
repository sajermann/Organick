import { HeaderPage } from '~/Components/HeaderPage';
import { Footer } from '~/Components/Footer';
import { Products } from '~/Components/Shop/Products';

export function Shop() {
	return (
		<>
			<HeaderPage
				heading="Shop"
				className="bg-[url('~/Assets/shop-banner.png')]"
			/>
			<Products />
			<Footer />
		</>
	);
}
