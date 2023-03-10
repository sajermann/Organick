/// <reference types="vitest" />
/// <reference types="vite/client" />

/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Pages from 'vite-plugin-pages';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), Pages()],
	base: '/Organick/',
	resolve: {
		alias: {
			'~': path.resolve(__dirname, 'src'),
		},
	},
});
