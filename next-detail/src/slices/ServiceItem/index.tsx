import { SliceComponentProps } from '@prismicio/react';
import { FC } from 'react';

import { Box, Button, Typography } from '@mui/material';
import { Content } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';

export type AllServicesProps = SliceComponentProps<Content.AllServicesSlice>;

const AllServices: FC<AllServicesProps> = ({ slice }) => {
	const isDark = slice?.primary?.color === 'black';

	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<Box
				sx={{
					backgroundColor: isDark ? '#111' : '#fff',
					color: isDark ? '#fff' : '#111',
					px: { xs: 2, md: 6 },
					py: { xs: 4, md: 8 },
				}}
			>
				<Box
					className="container"
					sx={{
						maxWidth: '1200px',
						mx: 'auto',
						display: 'flex',
						flexDirection: { xs: 'column', md: 'row' },
						alignItems: 'center',
						justifyContent: 'space-between',
						gap: 6,
					}}
				>
					{/* Левая часть - текст */}
					<Box sx={{ flex: '1 1 60%' }}>
						<Typography
							variant="h3"
							sx={{
								color: '#FF7C5D',
								fontWeight: 700,
								fontSize: { xs: '2rem', md: '2.5rem' },
								mb: 2,
							}}
						>
							{slice.primary.title}
						</Typography>

						<Typography
							variant="body1"
							sx={{
								fontSize: '1rem',
								lineHeight: 1.6,
								color: isDark ? '#ccc' : '#444',
								mb: 4,
							}}
						>
							{slice.primary.description}
						</Typography>

						<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
							{slice.primary.button_group.map((text, index) => (
								<Button
									key={index}
									variant="contained"
									sx={{
										backgroundColor: '#FF7C5D',
										color: '#fff',
										borderRadius: 2,
										px: 3,
										py: 1.2,
										fontSize: '0.875rem',
										fontWeight: 600,
										textTransform: 'uppercase',
										'&:hover': {
											backgroundColor: '#e86449',
										},
									}}
								>
									{text.button_name}
								</Button>
							))}
						</Box>
					</Box>

					{/* Правая часть — изображение (если нужно) */}
					<Box
						sx={{
							display: { xs: 'none', md: 'block' },
							width: '100%',
							maxWidth: '400px',
							borderRadius: 3,
							boxShadow: 4,
							flex: '1 1 40%',
							overflow: 'hidden',
						}}
					>
						<PrismicNextImage
							field={slice.primary.image_service}
							fallbackAlt=""
							style={{
								width: '100%',
								height: 'auto',
								display: 'block',
							}}
						/>
					</Box>
				</Box>
			</Box>
		</section>
	);
};

export default AllServices;
