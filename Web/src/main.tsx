import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RoutesConfig } from './Components/Routes';
import { InjectorProviders } from './Components/InjectorProviders';

import './global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<InjectorProviders>
			<Suspense fallback={<p>Loading...</p>}>
				<RoutesConfig />
			</Suspense>
		</InjectorProviders>
	</React.StrictMode>
);
