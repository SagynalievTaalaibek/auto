'use client';

import { useEffect } from 'react';

import { Edit as EditIcon, Email, Phone } from '@mui/icons-material';
import { Box, Card, IconButton, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

import { selectUser } from '@/features/auth/authSlice';

import { ROUTES } from '@/shared/constants/constants';
import { useAppSelector } from '@/shared/hooks/hooksStore';

export function SettingsProfile() {
	const user = useAppSelector(selectUser);
	const router = useRouter();

	useEffect(() => {
		if (user === null) {
			router.push(ROUTES.LOGIN);
		}
	}, [user, router]);

	return (
		<Box sx={{ mt: 4 }}>
			{user && (
				<Card sx={{ p: 3 }}>
					<Typography variant="h6" gutterBottom>
						Мои данные
					</Typography>
					<Stack spacing={1}>
						<Stack direction="row" alignItems="center" spacing={1}>
							<Phone fontSize="small" />
							<Typography>{user.phone}</Typography>
							<IconButton size="small">
								<EditIcon fontSize="small" />
							</IconButton>
						</Stack>
						<Stack direction="row" alignItems="center" spacing={1}>
							<Email fontSize="small" />
							<Typography>{user.email}</Typography>
							<IconButton size="small">
								<EditIcon fontSize="small" />
							</IconButton>
						</Stack>
					</Stack>
				</Card>
			)}
		</Box>
	);
}
