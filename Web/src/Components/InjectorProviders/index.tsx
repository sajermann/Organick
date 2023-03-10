import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import eruda from 'eruda';

import { DarkModeProvider } from '../../Hooks/UseDarkMode';
import { TestProvider } from '../../Hooks/UseTest';
import { Header } from '../Header';

import '../../Config/i18n';

export function InjectorProviders({ children }: { children: ReactNode }) {
	eruda.init();
	console.log('ratio', window.devicePixelRatio);
	console.log('width', window.screen.width);
	console.log('height', window.screen.height);
	return (
		<BrowserRouter basename="Organick/">
			<DarkModeProvider>
				<TestProvider>
					<Header />
					{children}
				</TestProvider>
			</DarkModeProvider>
		</BrowserRouter>
	);
}
