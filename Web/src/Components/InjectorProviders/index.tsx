import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { DarkModeProvider } from '~/Hooks/UseDarkMode';
import { TestProvider } from '~/Hooks/UseTest';
import '~/Config/i18n';

export function InjectorProviders({ children }: { children: ReactNode }) {
	return (
		<BrowserRouter basename="/Organick">
			<DarkModeProvider>
				<TestProvider>{children}</TestProvider>
			</DarkModeProvider>
		</BrowserRouter>
	);
}
