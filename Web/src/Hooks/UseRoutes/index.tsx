import { lazy, useMemo } from 'react';

import { Home } from '~/Pages/Home';
import { TRoute } from '~/Types/TRoute';

const AboutPage = lazy(() =>
	import('~/Pages/About').then(({ About }) => ({
		default: About,
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
		],
		[]
	);

	return { globalRoutes };
}
