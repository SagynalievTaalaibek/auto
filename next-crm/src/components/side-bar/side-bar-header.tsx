import React from 'react';
import { useDispatch } from 'react-redux';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';

import { closeDrawer } from '@/features/drawer/drawer-slice';

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	borderRadius: 0,
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
}));

export function SideBarHeader() {
	const theme = useTheme();
	const dispatch = useDispatch();

	return (
		<DrawerHeader>
			{theme.direction !== 'rtl' && (
				<>
					<Typography
						variant={'h6'}
						component={'div'}
						sx={{
							fontWeight: 'bold',
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<span
							style={{
								display: 'block',
								color: theme.palette.primary.main,
							}}
						>
							DETAILING CRM
						</span>
					</Typography>
					<IconButton onClick={() => dispatch(closeDrawer())}>
						<ChevronRightIcon />
					</IconButton>
				</>
			)}
		</DrawerHeader>
	);
}
