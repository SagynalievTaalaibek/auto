'use client';

import { Provider } from 'react-redux';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';

import ClientLayout from '@/components/client/layout/client-layout';

import theme from '@/config/theme';
import { store } from '@/store/store';

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<Provider store={store}>
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
		</Provider>
	);
}
