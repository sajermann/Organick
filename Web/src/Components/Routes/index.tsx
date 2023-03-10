import { Route, Routes, useSearchParams } from 'react-router-dom';
import eruda from 'eruda';

import { useRoutes } from '~/Hooks/UseRoutes';

export function RoutesConfig() {
	const { globalRoutes } = useRoutes();
	const [searchParams] = useSearchParams();
	const debug = searchParams.get('debug');
	if (debug === 'true') {
		eruda.init();
		console.log('ratio', window.devicePixelRatio);
		console.log('width', window.screen.width);
		console.log('height', window.screen.height);
	}
	return (
		<Routes>
			{globalRoutes.map(route => (
				<Route key={route.path} path={route.path} element={route.element} />
			))}
		</Routes>
	);
}
