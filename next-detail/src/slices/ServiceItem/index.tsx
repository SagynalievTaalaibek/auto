import { SliceComponentProps } from '@prismicio/react';
import { FC } from 'react';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Content } from '@prismicio/client';

/**
 * Props for `AllServices`.
 */
export type AllServicesProps = SliceComponentProps<Content.AllServicesSlice>;

/**
 * Component for "AllServices" Slices.
 */

const AllServices: FC<AllServicesProps> = ({ slice }) => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<Box
				sx={{
					bgcolor: '#111',
					color: '#fff',
					px: 4,
					py: 6,
				}}
			>
				<Box className={'container'}>
					<Box sx={{ flex: '1 1 50%', pr: 4 }}>
						<Typography variant="h3" sx={{ color: '#FF7C5D', mb: 3 }}>
							{slice.primary.title}
						</Typography>
						<Typography variant="body1" sx={{ mb: 4 }}>
							{slice.primary.description}
						</Typography>

						{/* Кнопки */}
						<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
							{slice.primary.button_group.map((text, index) => (
								<Button
									key={index}
									variant={
										text.button_name === 'ПОДАРОЧНЫЙ СЕРТИФИКАТ'
											? 'contained'
											: 'outlined'
									}
									sx={{
										bgcolor:
											text.button_name === 'ПОДАРОЧНЫЙ СЕРТИФИКАТ'
												? '#FF7C5D'
												: '#222',
										color: '#fff',
										borderColor: '#333',
										borderRadius: '8px',
										fontSize: '0.875rem',
										px: 2.5,
										py: 1,
										textTransform: 'uppercase',
										'&:hover': {
											bgcolor:
												text.button_name === 'ПОДАРОЧНЫЙ СЕРТИФИКАТ'
													? '#e0664b'
													: '#333',
										},
									}}
								>
									{text.button_name}
								</Button>
							))}

							{/* Отдельно кнопка "Подарочный сертификат" */}
							<Button
								variant="contained"
								sx={{
									bgcolor: '#FF7C5D',
									color: '#fff',
									borderRadius: '8px',
									px: 2.5,
									py: 1,
									textTransform: 'none',
									'&:hover': {
										bgcolor: '#e0664b',
									},
								}}
							>
								ПОДАРОЧНЫЙ СЕРТИФИКАТ
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</section>
	);
};

export default AllServices;
