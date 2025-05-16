'use client';

import { queryClient } from '@/config/react-query-client';
import { QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';

import { ClientLayout } from '@/components';
import { persistor, store } from '@/config/store/store';
import theme from '@/config/theme';

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<QueryClientProvider client={queryClient}>
					<SnackbarProvider
						maxSnack={3}
						anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
						autoHideDuration={3000}
					>
						<ThemeProvider theme={theme}>
							<CssBaseline />
							<ClientLayout>{children}</ClientLayout>
						</ThemeProvider>
					</SnackbarProvider>
				</QueryClientProvider>
			</PersistGate>
		</Provider>
	);
}
