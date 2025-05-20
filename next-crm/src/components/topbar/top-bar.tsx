'use client';

import React from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar from '@mui/material/AppBar';
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';

import { selectUser } from '@/features/auth/authSlice';
import { openDrawer, selectDrawerOpen } from '@/features/drawer/drawer-slice';

import { useAppDispatch, useAppSelector } from '@/shared/hooks/hooksStore';

interface AppBarProps extends MuiAppBarProps {
	open?: boolean;
}

const drawerWidth = 260;

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: prop => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	borderRadius: 0,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

export function TopBar() {
	const theme = useTheme();
	const user = useAppSelector(selectUser);
	const dispatch = useAppDispatch();
	const open = useAppSelector(selectDrawerOpen);

	return (
		<AppBar
			position="fixed"
			open={open}
			sx={{ backgroundColor: theme.palette.background.paper }}
		>
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					onClick={() => dispatch(openDrawer())}
					edge="start"
					sx={{
						padding: '0 0 0 4px',
						marginRight: 5,
						...(open && { display: 'none' }),
					}}
				>
					<MenuIcon sx={{ color: 'black', fontSize: '30px' }} />
				</IconButton>
				<Typography variant="h6" noWrap component="div" sx={{ color: 'black' }}>
					{user ? `Добро пожаловать, ${user?.name}` : 'Загрузка...'}
				</Typography>
			</Toolbar>
		</AppBar>
	);
}
