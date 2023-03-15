import { lazy, useMemo } from 'react';

import { Home } from '~/Pages/Home';
import { TRoute } from '~/Types/TRoute';

const AboutPage = lazy(() =>
	import('~/Pages/About').then(({ About }) => ({
		default: About,
	}))
);

const ShopPage = lazy(() =>
	import('~/Pages/Shop').then(({ Shop }) => ({
		default: Shop,
	}))
);

export function useRoutes() {
	const globalRoutes: TRoute[] = useMemo(
		(): TRoute[] => [
			{
				name: 'Home',
				path: '/',
				element: <Home />,
			},
			{
				name: 'About',
				path: '/about',
				element: <AboutPage />,
			},
			{
				name: 'Shop',
				path: '/shop',
				element: <ShopPage />,
			},
		],
		[]
	);

	return { globalRoutes };
}
