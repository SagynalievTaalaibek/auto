'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';

import Layout from '@/components/providers/layout';

import { persistor, store } from '@/shared/store/store';
import theme from '@/shared/theme/theme';

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<SnackbarProvider
					maxSnack={3}
					anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
					autoHideDuration={3000}
				>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<Layout>{children}</Layout>
					</ThemeProvider>
				</SnackbarProvider>
			</PersistGate>
		</Provider>
	);
}
