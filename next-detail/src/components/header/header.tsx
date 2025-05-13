'use client';

import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { ROUTES, ROUTE_URL } from '@/config/constants';

const NavLinkButton = styled(Link)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	color: '#fff',
	textDecoration: 'none',
	fontWeight: 600,
	'&:hover': {
		color: theme.palette.secondary.main,
		fontWeight: 700,
	},
}));

export function Header() {
	const router = useRouter();

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
						{ROUTE_URL.map((url, i) => (
							<NavLinkButton key={`${i}-${url.name}`} href={url.path}>
								{url.name}
							</NavLinkButton>
						))}
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
