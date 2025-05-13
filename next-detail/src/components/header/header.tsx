'use client';

import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';

import { ROUTES } from '@/config/constants';

export function Header() {
	const router = useRouter();

	/*const user = useAppSelector(state => state.user);

	console.log('Header', user);*/

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position="static"
				color="primary"
				sx={{ borderRadius: '0', mt: 0 }}
			>
				<Toolbar>
					<Box
						className="container"
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							width: '100%',
							color: '#000000',
						}}
					>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2 }}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							Домой
						</Typography>
						<Button
							color="inherit"
							variant="contained"
							onClick={() => router.push(ROUTES.LOGIN)}
						>
							Войти
						</Button>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
