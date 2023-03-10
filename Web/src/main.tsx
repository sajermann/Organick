import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RoutesConfig } from './Components/Routes';
import { InjectorProviders } from './Components/InjectorProviders';

import './global.css';
import { Header } from './Components/Header';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<InjectorProviders>
			<Suspense fallback={<p>Loading...</p>}>
				<Header />
				<RoutesConfig />
			</Suspense>
		</InjectorProviders>
	</React.StrictMode>
);
