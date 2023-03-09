import { Route, Routes } from 'react-router-dom';
import { useRoutes } from '~/Hooks/UseRoutes';

export function RoutesConfig() {
	const { globalRoutes } = useRoutes();
	return (
		<Routes>
			{globalRoutes.map(route => (
				<Route path={route.path} element={route.element} />
			))}
		</Routes>
	);
}
