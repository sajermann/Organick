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

const TeamPage = lazy(() =>
	import('~/Pages/Team').then(({ Team }) => ({
		default: Team,
	}))
);

const BlogPage = lazy(() =>
	import('~/Pages/Blog').then(({ Blog }) => ({
		default: Blog,
	}))
);

const ContactPage = lazy(() =>
	import('~/Pages/Contact').then(({ Contact }) => ({
		default: Contact,
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
			{
				name: 'Team',
				path: '/team',
				element: <TeamPage />,
			},
			{
				name: 'Blog',
				path: '/blog',
				element: <BlogPage />,
			},
			{
				name: 'Contact',
				path: '/contact',
				element: <ContactPage />,
			},
		],
		[]
	);

	return { globalRoutes };
}
