'use client';

import { useEffect, useState } from 'react';

import { Add } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';

import { selectUserLoading } from '@/features/auth/authSlice';
import { fetchUsersCRM } from '@/features/auth/authThunks';

import { AddUserModal, LoadingScreen, UserTable } from '@/components';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/hooksStore';

export default function Page() {
	const [open, setOpen] = useState(false);
	const dispatch = useAppDispatch();
	const loading = useAppSelector(selectUserLoading);

	useEffect(() => {
		dispatch(fetchUsersCRM());
	}, [dispatch]);

	return (
		<Box>
			<Typography variant="h4" sx={{ fontWeight: 600 }} gutterBottom>
				Персонал
			</Typography>

			<Button
				variant="contained"
				startIcon={<Add />}
				onClick={() => setOpen(true)}
				sx={{ mb: 2 }}
			>
				Добавить сотрудника
			</Button>

			{loading ? <LoadingScreen /> : <UserTable />}

			<AddUserModal open={open} onCloseModalAction={() => setOpen(false)} />
		</Box>
	);
}
