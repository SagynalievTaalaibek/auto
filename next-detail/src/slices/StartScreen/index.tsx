'use client';

import { SliceComponentProps } from '@prismicio/react';
import { FC } from 'react';

import { Typography, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Content } from '@prismicio/client';

/**
 * Props for `StartScreen`.
 */
export type StartScreenProps = SliceComponentProps<Content.StartScreenSlice>;

/**
 * Component for "StartScreen" Slices.
 */

const StartScreen: FC<StartScreenProps> = ({ slice }) => {
	const theme = useTheme();

	return (
		<Box
			sx={{
				background: `url(${slice.primary.image_url}) no-repeat center center fixed`,
				backgroundSize: 'cover',
				minHeight: '100vh',
				width: '100%',
			}}
		>
			<div className={'container'}>
				<Box>
					<Box sx={{ mb: 4, paddingTop: '200px' }}>
						<Typography
							variant="h2"
							component="h1"
							sx={{
								fontWeight: 700,
								fontSize: { xs: '2rem', md: '3rem' },
								color: '#FFD700', // Жёлтый акцент
								lineHeight: 1.2,
							}}
						>
							{slice.primary.main_title}
						</Typography>

						<Typography
							variant="h2"
							component="h2"
							sx={{
								fontWeight: 700,
								fontSize: { xs: '2rem', md: '3rem' },
								color: 'white',
								lineHeight: 1.2,
								mb: 2,
							}}
						>
							{slice.primary.second_text}
						</Typography>

						<Typography
							variant="body1"
							sx={{
								fontSize: { xs: '1rem', md: '1.125rem' },
								color: '#ccc',
								maxWidth: '500px',
								fontWeight: 500,
							}}
						>
							{slice.primary.description}
						</Typography>
					</Box>

					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row',
							gap: '20px',
							marginTop: '30px',
						}}
					>
						<Button
							variant="contained"
							sx={{
								color: 'black',
								px: 3,
								py: 1.5,
								width: 'auto',
								backgroundColor: theme.palette.primary.main,
								'&:hover': {
									fontWeight: 600,
								},
							}}
						>
							Записаться
						</Button>
						<Button
							variant="contained"
							sx={{
								color: 'white',
								px: 3,
								py: 1.5,
								width: 'auto',
								backgroundColor: theme.palette.primary.dark,
								'&:hover': {
									fontWeight: 600,
								},
							}}
						>
							Задать вопрос
						</Button>
					</Box>
				</Box>
			</div>
		</Box>
	);
};

export default StartScreen;
