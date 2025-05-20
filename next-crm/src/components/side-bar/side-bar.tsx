import React from 'react';

import LogoutIcon from '@mui/icons-material/Logout';
import { Tooltip } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { CSSObject, Theme, styled } from '@mui/material/styles';
import Link from 'next/link';

import { selectUser } from '@/features/auth/authSlice';
import { selectDrawerOpen } from '@/features/drawer/drawer-slice';

import { SideBarHeader } from '@/components/side-bar/side-bar-header';

import {
	dashboardAdminRouters,
	dashboardSuperAdminRoutes,
} from '@/shared/constants/constants';
import { useAppSelector } from '@/shared/hooks/hooksStore';

const drawerWidth = 260;

const openedMixin = (theme: Theme): CSSObject => ({
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: 'hidden',
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
});

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: 'nowrap',
	boxSizing: 'border-box',
	...(open && {
		...openedMixin(theme),
		'& .MuiDrawer-paper': openedMixin(theme),
	}),
	...(!open && {
		...closedMixin(theme),
		'& .MuiDrawer-paper': closedMixin(theme),
	}),
}));

export function SideBar() {
	const user = useAppSelector(selectUser);
	const open = useAppSelector(selectDrawerOpen);

	const handleLogout = async () => {
		console.log('LOGOUT', user);
	};

	return (
		<Drawer variant="permanent" open={open}>
			<SideBarHeader />
			<List sx={{ mt: 1 }}>
				{dashboardAdminRouters.map(item => (
					<ListItem key={item.id} disablePadding sx={{ display: 'block' }}>
						<Tooltip title={item.tooltip} placement={'right'}>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: open ? 'initial' : 'center',
									px: 2.5,
								}}
								component={Link}
								href={`/dashboard/${item.url}`}
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: open ? 3 : 'auto',
										justifyContent: 'center',
									}}
								>
									{React.createElement(item.icon)}
								</ListItemIcon>
								<ListItemText
									primary={item.title}
									sx={{ opacity: open ? 1 : 0 }}
								/>
							</ListItemButton>
						</Tooltip>
					</ListItem>
				))}
			</List>
			<List sx={{ mt: 'auto' }}>
				{user &&
					user.role === 'ADMIN' &&
					dashboardSuperAdminRoutes.map(item => (
						<ListItem key={item.id} disablePadding sx={{ display: 'block' }}>
							<Tooltip title={item.tooltip} placement={'right'}>
								<ListItemButton
									sx={{
										minHeight: 48,
										justifyContent: open ? 'initial' : 'center',
										px: 2.5,
									}}
									component={Link}
									href={`/${item.url}`}
								>
									<ListItemIcon
										sx={{
											minWidth: 0,
											mr: open ? 3 : 'auto',
											justifyContent: 'center',
										}}
									>
										{React.createElement(item.icon)}
									</ListItemIcon>
									<ListItemText
										primary={item.title}
										sx={{ opacity: open ? 1 : 0 }}
									/>
								</ListItemButton>
							</Tooltip>
						</ListItem>
					))}
			</List>
			<List sx={{ mb: 2 }}>
				<ListItem disablePadding sx={{ display: 'block' }}>
					<Tooltip title="Выйти" placement={'right'}>
						<ListItemButton
							sx={{
								minHeight: 48,
								justifyContent: open ? 'initial' : 'center',
								px: 2.5,
							}}
							onClick={() => handleLogout()}
						>
							<ListItemIcon
								sx={{
									minWidth: 0,
									mr: open ? 3 : 'auto',
									justifyContent: 'center',
								}}
							>
								<LogoutIcon />
							</ListItemIcon>
							<ListItemText primary={'Выйти'} sx={{ opacity: open ? 1 : 0 }} />
						</ListItemButton>
					</Tooltip>
				</ListItem>
			</List>
		</Drawer>
	);
}
